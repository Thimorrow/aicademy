import type { Tool } from "@/data/aicademy";

export function OpenTool({ name, url }: { name: string; url: string }) {
  return (
    <p>
      <a className="btn" href={url} rel="noreferrer" target="_blank">
        Open {name}
      </a>
      <span className="quiet mt-2 block text-sm">Opens a new page.</span>
    </p>
  );
}

export function ToolFacts({ tool }: { tool: Tool }) {
  const deviceLabel =
    tool.devices.length === 2 ? "computer and phone" : tool.devices[0];

  return (
    <div>
      <p className="body">{tool.goodFor}</p>
      <p className="body quiet mt-3">{tool.freeInWords}</p>
      <p className="mt-3 text-sm text-good">{tool.paymentNote}</p>
      {tool.warning ? <p className="note mt-4 text-sm leading-relaxed">{tool.warning}</p> : null}
      <div className="mt-4">
        <OpenTool name={tool.name} url={tool.url} />
      </div>
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
