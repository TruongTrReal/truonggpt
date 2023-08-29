import { useState } from "react";
import "./index.css";
import { Head } from "@impalajs/react/head";

interface AppProps {
  title: string;
}

export const Chat: React.FC<React.PropsWithChildren<AppProps>> = ({
  children,
  title,
}) => {
  return (
    <>
      <div>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TruongGPT" />
      </div>
      {children}
    </>
  );
};
