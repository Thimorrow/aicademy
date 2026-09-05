import type { Metadata } from "next";
import { tools } from "@/data/aicademy";

export const metadata: Metadata = { title: "Tools" };

const stageTitle = {
  1: "Start here. Browser only. Nothing to install.",
  2: "When the free pile in the browser runs out.",
  3: "Later, if you want to go deeper. Harder on purpose.",
} as const;

export default function ToolsPage() {
  return (
    <main id="main" className="pb-16">
      <h1 className="display text-4xl leading-tight sm:text-5xl">The tools</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
        A short list. We keep it small so we can check it. Each line says what is free, whether
        you need a payment card, where we read that, and when.
      </p>
      {([1, 2, 3] as const).map((stage) => {
        const group = tools.filter((tool) => tool.stage === stage);
        if (group.length === 0) return null;
        return (
          <section className="mt-12" key={stage}>
            <h2 className="display text-2xl">{stageTitle[stage]}</h2>
            <ul className="mt-5 grid gap-4">
              {group.map((tool) => (
                <li className="rounded-2xl border border-line bg-card p-5 sm:p-6" key={tool.id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="display text-3xl">{tool.name}</h3>
                    <p className="text-sm text-good">{tool.paymentNote}</p>
                  </div>
                  <p className="mt-3 leading-relaxed">{tool.goodFor}</p>
                  <p className="mt-3 leading-relaxed text-mute">{tool.freeInWords}</p>
                  {tool.warning ? (
                    <p className="mt-4 rounded-xl bg-paper-2 p-4 text-sm leading-relaxed">
                      {tool.warning}
                    </p>
                  ) : null}
                  <p className="mt-4 text-sm text-mute">
                    Works on {tool.devices.join(" and ")}. Checked {tool.checkedOn}. Source:{" "}
                    <a className="underline" href={tool.source} rel="noreferrer" target="_blank">
                      {tool.sourceLabel}
                    </a>
                    .
                  </p>
                  <p className="mt-3">
                    <a className="font-bold text-mark hover:text-mark-deep" href={tool.url} rel="noreferrer" target="_blank">
                      Open {tool.name}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
