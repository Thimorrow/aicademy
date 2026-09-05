import type { Metadata } from "next";
import { tools } from "@/data/aicademy";
import { ToolFacts } from "../components/ToolFacts";

export const metadata: Metadata = { title: "Tools" };

const stageTitle = {
  1: "Start here. Browser only.",
  2: "When the free tries in the browser run out.",
  3: "Later, if you want to go deeper. Harder on purpose.",
} as const;

export default function ToolsPage() {
  return (
    <main id="main">
      <h1 className="display text-[2.35rem] sm:text-5xl">The tools</h1>
      <p className="body quiet mt-4 text-lg">
        A short list we can actually check. Each one says what is free, whether you need a
        payment card, where we read that, and when.
      </p>
      {([1, 2, 3] as const).map((stage) => {
        const group = tools.filter((tool) => tool.stage === stage);
        if (group.length === 0) return null;
        return (
          <section className="mt-12" key={stage}>
            <h2 className="display text-2xl">{stageTitle[stage]}</h2>
            <ul className="mt-6 grid gap-8">
              {group.map((tool) => (
                <li key={tool.id}>
                  <h3 className="display text-[1.85rem] leading-tight">{tool.name}</h3>
                  <div className="mt-3">
                    <ToolFacts tool={tool} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
