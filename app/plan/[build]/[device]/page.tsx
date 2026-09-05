import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILD_KINDS, DEVICES } from "@/data/aicademy";
import { getPlan, isBuildKind, isDevice } from "@/lib/plan";

export function generateStaticParams() {
  return BUILD_KINDS.flatMap((build) => DEVICES.map((device) => ({ build, device })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ build: string; device: string }>
}): Promise<Metadata> {
  const { build, device } = await params;
  if (!isBuildKind(build) || !isDevice(device)) {
    return { title: "Plan" };
  }
  const plan = getPlan(build, device);
  return { title: plan.project.title };
}

export default async function PlanPage({
  params,
}: {
  params: Promise<{ build: string; device: string }>
}) {
  const { build, device } = await params;
  if (!isBuildKind(build) || !isDevice(device)) {
    notFound();
  }

  const plan = getPlan(build, device);
  const describe = plan.tips[0];
  const broke = plan.tips[1];
  const credits = plan.tips[2];
  const publish = plan.tips[3];

  return (
    <main id="main" className="pb-16">
      <p className="text-sm font-bold tracking-wide text-mark uppercase">Your plan</p>
      <h1 className="display mt-2 text-4xl leading-tight text-balance sm:text-5xl">
        {plan.project.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">{plan.project.whyFun}</p>

      <section className="mt-10 rounded-2xl border border-line bg-card p-5 sm:p-6">
        <h2 className="display text-2xl">Start with {plan.tool.name}</h2>
        <p className="mt-3 leading-relaxed">{plan.tool.goodFor}</p>
        <p className="mt-3 leading-relaxed text-mute">{plan.tool.freeInWords}</p>
        <p className="mt-3 text-sm text-good">{plan.tool.paymentNote}</p>
        {plan.tool.warning ? (
          <p className="mt-4 rounded-xl bg-paper-2 p-4 text-sm leading-relaxed">{plan.tool.warning}</p>
        ) : null}
        <p className="mt-4">
          <a
            className="choice inline-flex items-center justify-center rounded-full bg-mark px-5 py-3 font-bold text-paper hover:bg-mark-deep"
            href={plan.tool.url}
            rel="noreferrer"
            target="_blank"
          >
            Open {plan.tool.name}
          </a>
        </p>
        <p className="mt-3 text-sm text-mute">
          Checked {plan.tool.checkedOn}. Source:{" "}
          <a className="underline" href={plan.tool.source} rel="noreferrer" target="_blank">
            {plan.tool.sourceLabel}
          </a>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="display text-2xl">Do this</h2>
        <ol className="mt-4 space-y-4">
          {plan.project.steps.map((step, index) => (
            <li className="flex gap-4" key={step}>
              <span className="display w-8 shrink-0 text-2xl text-mark">{index + 1}</span>
              <p className="leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border border-line p-5 sm:p-6">
        <h2 className="display text-2xl">You are done when</h2>
        <p className="mt-3 text-lg leading-relaxed">{plan.project.doneWhen}</p>
      </section>

      <aside className="mt-6 rounded-2xl bg-paper-2 p-5 sm:p-6">
        <h2 className="display text-2xl">{describe.title}</h2>
        <p className="mt-3 leading-relaxed text-mute">{describe.body}</p>
      </aside>
      <aside className="mt-4 rounded-2xl bg-paper-2 p-5 sm:p-6">
        <h2 className="display text-2xl">{broke.title}</h2>
        <p className="mt-3 leading-relaxed text-mute">{broke.body}</p>
      </aside>

      <section className="mt-10">
        <h2 className="display text-2xl">If the free pile runs out</h2>
        <p className="mt-3 leading-relaxed">
          Switch to {plan.nextTool.name}. {plan.nextTool.goodFor}
        </p>
        {plan.nextTool.warning ? (
          <p className="mt-4 rounded-xl border border-line bg-card p-4 leading-relaxed">
            {plan.nextTool.warning}
          </p>
        ) : null}
        <p className="mt-4 leading-relaxed text-mute">{credits.body}</p>
        <p className="mt-4">
          <a className="underline" href={plan.nextTool.url} rel="noreferrer" target="_blank">
            Open {plan.nextTool.name}
          </a>
        </p>
      </section>

      <aside className="mt-10 rounded-2xl border border-line bg-card p-5 sm:p-6">
        <h2 className="display text-2xl">{publish.title}</h2>
        <p className="mt-3 leading-relaxed text-mute">{publish.body}</p>
      </aside>

      <p className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-6">
        <Link className="text-mute hover:text-ink" href="/start">
          Start over
        </Link>
        <Link className="text-mute hover:text-ink" href="/tools">
          See every tool
        </Link>
      </p>
    </main>
  );
}
