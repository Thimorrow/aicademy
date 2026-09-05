import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILD_KINDS, DEVICES, buildChoices, deviceChoices } from "@/data/aicademy";
import { getPlan, isBuildKind, isDevice } from "@/lib/plan";
import { PasteBlock } from "../../../components/PasteBlock";
import { OpenTool, ToolFacts } from "../../../components/ToolFacts";

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
  const buildLabel = buildChoices.find((item) => item.id === build)?.label;
  const deviceLabel = deviceChoices.find((item) => item.id === device)?.label;

  return (
    <main id="main">
      <p className="progress">
        <b>Plan</b>
      </p>
      <p className="quiet mt-2 text-sm">
        {buildLabel}. {deviceLabel}.
      </p>
      <h1 className="display mt-2 text-[2.35rem] sm:text-5xl">
        {plan.project.title}
      </h1>
      <p className="body mt-3 text-lg">{plan.project.whyFun}</p>

      <section className="mt-6">
        <h2 className="display text-2xl">Start with {plan.tool.name}</h2>
        <div className="mt-3">
          <OpenTool
            hint="Opens a new page. Copy the words below, then paste them there."
            name={plan.tool.name}
            url={plan.tool.url}
          />
        </div>
        <PasteBlock text={plan.project.paste} />
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">After you paste</h2>
        <ol className="mt-5 space-y-5">
          {plan.project.steps.slice(2).map((step, index) => (
            <li key={step}>
              <div className="flex gap-4">
                <span className="step-num display w-7 shrink-0 text-[1.65rem] leading-none text-mark">
                  {index + 1}
                </span>
                <p className="body">{step}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="note mt-12">
        <h2 className="display text-2xl">You are done when</h2>
        <p className="body mt-2 text-lg">{plan.project.doneWhen}</p>
      </section>

      <section className="panel mt-12">
        <h2 className="display text-2xl">About {plan.tool.name}</h2>
        <div className="mt-3">
          <ToolFacts showOpen={false} tool={plan.tool} />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="display text-2xl">If you get stuck</h2>
        <dl className="mt-5 space-y-5">
          <div>
            <dt className="font-bold">{describe.title}</dt>
            <dd className="body quiet mt-1">{describe.body}</dd>
          </div>
          <div>
            <dt className="font-bold">{broke.title}</dt>
            <dd className="body quiet mt-1">{broke.body}</dd>
          </div>
          <div>
            <dt className="font-bold">{publish.title}</dt>
            <dd className="body quiet mt-1">{publish.body}</dd>
          </div>
        </dl>
      </section>

      <section className="panel mt-12">
        <h2 className="display text-2xl">If the free tries run out</h2>
        <p className="body mt-3">
          Switch to {plan.nextTool.name}. {plan.nextTool.goodFor}
        </p>
        {plan.nextTool.warning ? (
          <p className="note mt-4 leading-relaxed">{plan.nextTool.warning}</p>
        ) : null}
        <p className="body quiet mt-3">{credits.body}</p>
        <div className="mt-4">
          <OpenTool name={plan.nextTool.name} url={plan.nextTool.url} />
        </div>
      </section>

      <p className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-6">
        <Link className="link tap" href="/">
          Start over
        </Link>
        <Link className="link tap" href="/tools">
          See every tool
        </Link>
      </p>
    </main>
  );
}
