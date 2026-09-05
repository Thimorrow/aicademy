"use client";

import { useState } from "react";

export function PasteBlock({ text }: { text: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1600);
    } catch {
      setStatus("failed");
    }
  }

  const label = status === "copied" ? "Copied" : status === "failed" ? "Copy failed" : "Copy the words";

  return (
    <div className="panel mt-4">
      <p className="text-sm font-bold">Words to paste</p>
      {text.includes("[") ? (
        <p className="quiet mt-1 text-sm">Replace the words in [brackets] with yours, then copy.</p>
      ) : null}
      <button aria-live="polite" className="btn btn-copy mt-3" onClick={copy} type="button">
        {label}
      </button>
      {status === "failed" ? (
        <p className="quiet mt-2 text-sm">Select the words below and copy them yourself.</p>
      ) : null}
      <pre className="paste mt-3">{text}</pre>
    </div>
  );
}
