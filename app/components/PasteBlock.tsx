"use client";

import { useState } from "react";

export function PasteBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(text);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="panel mt-4">
      <p className="text-sm font-bold">Words to paste</p>
      {text.includes("[") ? (
        <p className="quiet mt-1 text-sm">Replace the words in [brackets] with yours, then copy.</p>
      ) : null}
      <pre className="paste mt-2">{text}</pre>
      <button aria-live="polite" className="btn btn-copy mt-3" onClick={copy} type="button">
        {copied ? "Copied" : "Copy the words"}
      </button>
    </div>
  );
}
