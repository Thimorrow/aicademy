import type { Metadata } from "next";
import { tools } from "@/data/aicademy";
import { ToolFacts } from "../components/ToolFacts";

export const metadata: Metadata = { title: "Tools" };

const PAGE_MAKERS = new Set(["bolt", "lovable", "replit"]);

export default function ToolsPage() {
  const pageMakers = tools.filter((tool) => tool.stage === 1 && PAGE_MAKERS.has(tool.id));
  const talkers = tools.filter((tool) => tool.stage === 1 && !PAGE_MAKERS.has(tool.id));
  const later = ([2, 3] as const).map((stage) => ({
    stage,
    title:
      stage === 2
        ? "When the free tries in the browser run out."
        : "Later, if you want to go deeper. Harder on purpose.",
    group: tools.filter((tool) => tool.stage === stage),
  }));

  return (
    <main id="main">
      <h1 className="display text-[2.35rem] sm:text-5xl">The tools</h1>
      <p className="body quiet mt-4 text-lg">
        A short list we can actually check. Each one says what is free, whether you need a
        payment card, where we read that, and when.
      </p>

      <section className="mt-12">
        <h2 className="display text-2xl">These make a page you can share.</h2>
        <ul className="mt-6 grid gap-8">
          {pageMakers.map((tool) => (
            <li key={tool.id}>
              <h3 className="display text-[1.85rem] leading-tight">{tool.name}</h3>
              <div className="mt-3">
                <ToolFacts tool={tool} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">These only talk or draw a look.</h2>
        <p className="body quiet mt-2">
          Useful for words and pictures. They do not publish a page people can open.
        </p>
        <ul className="mt-6 grid gap-8">
          {talkers.map((tool) => (
            <li key={tool.id}>
              <h3 className="display text-[1.85rem] leading-tight">{tool.name}</h3>
              <div className="mt-3">
                <ToolFacts quietOpen tool={tool} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      {later.map(({ stage, title, group }) => {
        if (group.length === 0) return null;
        return (
          <section className="mt-12" key={stage}>
            <h2 className="display text-2xl">{title}</h2>
            <ul className="mt-6 grid gap-8">
              {group.map((tool) => (
                <li key={tool.id}>
                  <h3 className="display text-[1.85rem] leading-tight">{tool.name}</h3>
                  <div className="mt-3">
                    <ToolFacts quietOpen tool={tool} />
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
