import {
  FunctionComponent,
  DetailedHTMLProps,
  TableHTMLAttributes,
} from "react";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";

interface ChatMessage {
  role: "user" | "assistant" | "system" | "function";
  name?: string;
  content: string;
}
interface Props {
  message: ChatMessage;
}

// This lets us style any markdown tables that are rendered
const CustomTable: FunctionComponent<
  Omit<
    DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>,
    "ref"
  > &
    ReactMarkdownProps
> = ({ children, ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table {...props} className="w-full text-left border-collapse table-auto">
        {children}
      </table>
    </div>
  );
};

/**
 * This component renders a single chat message. It is rendered according to
 * whether it isa  message from the assistant or the user.
 */

export const ChatMessage: React.FC<React.PropsWithChildren<Props>> = ({
  message,
}) => {
  
  if (message.role === 'function') {
    return null;
  }

  return message.role === "user" ? (
    <div className="flex items-end justify-end">
      <div className="text-black bg-gray-300 border-gray-100 border-2 rounded-lg p-2 max-w-lg">
        <p>{message.content}</p>
      </div>
    </div>
  ) : (
    <div className="flex items-end">
      <div className="text-black bg-gray-100 border-gray-300 border-2 rounded-lg p-2 mr-20 w-full">
        <ReactMarkdown
          children={message.content}
          remarkPlugins={[remarkGfm]}
          components={{
            table: CustomTable,
          }}
        />
      </div>
    </div>
  );
  }
