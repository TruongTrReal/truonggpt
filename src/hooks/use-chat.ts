import { fetchEventSource } from "@fortaine/fetch-event-source";
import { useState, useMemo } from "react";
import { appConfig } from "../../config.browser";
import axios from "axios";

const API_PATH = "/api/chat";

interface ChatMessage {
  role: "user" | "assistant" | "system" | "function";
  name?: string;
  content: string;
}

/**
 * A custom hook to handle the chat state and logic
 */
export function useChat() {

  const [currentChat, setCurrentChat] = useState<string | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [state, setState] = useState<"idle" | "waiting" | "loading">("idle");

  // Lets us cancel the stream
  const abortController = useMemo(() => new AbortController(), []);

  /**
   * Cancels the current chat and adds the current chat to the history
   */
  function cancel() {
    setState("idle");
    abortController.abort();
    if (currentChat) {
      const newHistory = [
        ...chatHistory,
        { role: "user", content: currentChat } as const,
      ];

      setChatHistory(newHistory);
      setCurrentChat("");
    }
  }

  /**
   * Clears the chat history
   */

  function clear() {
    console.log("clear");
    setChatHistory([]);
  }

  /**
   * Make API call to get data needed to answer the question
   */
  const getDocumentAPI = async (plan:string, userMessage: string) => {
    try {
      const response = await axios.post('https://magnetic-eminent-bass.ngrok-free.app/api/truonggpt', {
        "plan": plan,
        "message": userMessage
      });
  
      const newContent = response.data;
  
      // Send the API response as the assistant's message
      return { role: "function", name: newContent.name, content: "!IMPORTANT: USE INFORMATION TO ANALYZE AND ANSWER QUESTION, DO NOT REPEAT INFORMATION\n" + newContent.content } as const;
    } catch (error) {
      return { role: "function", name: "guide", content: "read user question and answer with your latest knowledge, If don't know the answer, try to joke a round and move to different topic" } as const;
    }
  };

  /*
   * Sends a new message to the AI function and streams the response
   */
  const sendMessage = async (plan:string, message: string, chatHistory: Array<ChatMessage>, selectedModel: string) => {
    
    setState("waiting");
    let chatContent = "";
    const apiResponse = await getDocumentAPI(plan, message);

    const newHistory = [
      ...chatHistory,
      { role: "user", content: message } as const,
      apiResponse,
    ];
    setChatHistory(newHistory);

    const body = JSON.stringify({
      // Only send the most recent messages. This is also
      // done in the serverless function, but we do it here
      // to avoid sending too much data
      messages: newHistory.slice(-appConfig.historyLength),
      model: selectedModel,
    });

    // This is like an EventSource, but allows things like
    // POST requests and headers
    fetchEventSource(API_PATH, {
      body,
      method: "POST",
      signal: abortController.signal,
      onclose: () => {
        setState("idle");
      },
      onmessage: (event) => {
        switch (event.event) {
          case "delta": {
            // This is a new word or chunk from the AI
            setState("loading");
            const message = JSON.parse(event.data);
            if (message?.role === "assistant") {
              chatContent = "";
              return;
            }
            if (message.content) {
              chatContent += message.content;
              setCurrentChat(chatContent);
            }
            break;
          }
          case "open": {
            // The stream has opened and we should recieve
            // a delta event soon. This is normally almost instant.
            setCurrentChat("...");
            break;
          }
          case "done": {
            // Find and remove the nearest "function" message
            const systemMessageIndex = newHistory
              .slice()
              .reverse()
              .findIndex((msg) => msg.role === "function");
  
            if (systemMessageIndex !== -1) {
              newHistory.splice(newHistory.length - 1 - systemMessageIndex, 1);
            }
  
            setChatHistory((curr) => [
              ...curr,
              { role: "assistant", content: chatContent } as const,
            ]);
  
            setCurrentChat(null);
            setState("idle");
          }
          default:
            break;
        }
      },
    });
  };

  return { sendMessage, currentChat, chatHistory, cancel, clear, state };
}
