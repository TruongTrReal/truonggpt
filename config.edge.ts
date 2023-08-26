import type { AppConfig } from "./lib/edge/types.ts";
import { prompt } from "./prompts/movie-critic.ts";
// import { prompt } from "./prompts/tour-guide.ts";

export const appConfig: AppConfig = {
  // This should be set in an environment variable
  // See https://platform.openai.com/account/api-keys
  // OPENAI_API_KEY: Deno.env.get("OPENAI_API_KEY") ?? "",
  OPENAI_API_KEY: Deno.env.get("OPENAI_API_KEY") ?? "",
  // The maximum number of message in the history to send to the API
  // You should also set this in the config.browser.ts file.
  historyLength: 6,

  // The maximum length in characters of each message sent to the API
  // You should also set this in the config.browser.ts file.
  maxMessageLength: 2000,

  // The config values sent to the OpenAI API
  // You should not need to change these values
  // See https://platform.openai.com/docs/api-reference/chat/create
  apiConfig: {
    temperature: 1,
  },

  // This is where the magic happens. See the README for details
  // This can be a plain string if you'd prefer, or you can use
  // information from the request or context to generate it.
  systemPrompt: (_req, context) => `${prompt}
Current date: ${new Date().toDateString()}.
Have data access up to: ${new Date().toDateString()}.
User location: ${context.geo.city}, ${context.geo.country}`,
};
