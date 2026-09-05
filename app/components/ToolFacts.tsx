import type { Tool } from "@/data/aicademy";

export function OpenTool({
  name,
  url,
  hint = "Opens a new page.",
}: {
  name: string
  url: string
  hint?: string
}) {
  return (
    <p>
      <a className="btn" href={url} rel="noreferrer" target="_blank">
        Open {name}
      </a>
      <span className="quiet mt-2 block text-sm">{hint}</span>
    </p>
  );
}

export function ToolFacts({
  tool,
  showOpen = true,
}: {
  tool: Tool
  showOpen?: boolean
}) {
  const deviceLabel =
    tool.devices.length === 2 ? "computer and phone" : tool.devices[0];

  return (
    <div>
      <p className="body">{tool.goodFor}</p>
      <p className="body quiet mt-3">{tool.freeInWords}</p>
      <p className="mt-3 text-sm text-good">{tool.paymentNote}</p>
      {tool.warning ? <p className="note mt-4 text-sm leading-relaxed">{tool.warning}</p> : null}
      {showOpen ? (
        <div className="mt-4">
          <OpenTool name={tool.name} url={tool.url} />
        </div>
      ) : null}
      <p className="quiet mt-3 text-sm">
        Works on {deviceLabel}. Checked {tool.checkedOn}.
      </p>
      <p className="mt-1">
        <a className="link tap" href={tool.source} rel="noreferrer" target="_blank">
          Source: {tool.sourceLabel}
        </a>
      </p>
    </div>
  );
}
