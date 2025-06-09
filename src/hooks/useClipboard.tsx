// hooks/useClipboard.ts
import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2s
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopied(false);
      });
  };

  return { copied, copyToClipboard };
}
