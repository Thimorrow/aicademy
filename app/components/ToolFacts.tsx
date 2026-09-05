import type { Tool } from "@/data/aicademy";

export function ToolFacts({ tool }: { tool: Tool }) {
  const deviceLabel =
    tool.devices.length === 2 ? "computer and phone" : tool.devices[0];

  return (
    <div>
      <p className="body">{tool.goodFor}</p>
      <p className="body quiet mt-3">{tool.freeInWords}</p>
      <p className="mt-3 text-sm text-good">{tool.paymentNote}</p>
      {tool.warning ? <p className="note mt-4 text-sm leading-relaxed">{tool.warning}</p> : null}
      <p className="mt-4">
        <a className="btn" href={tool.url} rel="noreferrer" target="_blank">
          Open {tool.name}
        </a>
      </p>
      <p className="quiet mt-3 text-sm">
        Works on {deviceLabel}. Checked {tool.checkedOn}. Source:{" "}
        <a className="link" href={tool.source} rel="noreferrer" target="_blank">
          {tool.sourceLabel}
        </a>
        .
      </p>
    </div>
  );
}
