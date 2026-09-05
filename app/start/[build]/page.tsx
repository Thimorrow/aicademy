import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILD_KINDS, buildChoices, deviceChoices } from "@/data/aicademy";
import { isBuildKind } from "@/lib/plan";

export function generateStaticParams() {
  return BUILD_KINDS.map((build) => ({ build }));
}

export default async function StartBuildPage({
  params,
}: {
  params: Promise<{ build: string }>
}) {
  const { build } = await params;
  if (!isBuildKind(build)) {
    notFound();
  }

  const chosenLabel = buildChoices.find((item) => item.id === build)?.label;

  return (
    <main id="main" className="pb-16">
      <p className="text-sm text-mute">Question 2 of 2</p>
      <h1 className="display mt-2 text-4xl leading-tight text-balance sm:text-5xl">
        Where are you working today?
      </h1>
      <p className="mt-4 max-w-xl text-mute">
        You want {chosenLabel?.toLowerCase()}. That only changes which tool we start with.
      </p>
      <ul className="mt-8 grid gap-3">
        {deviceChoices.map((choice) => (
          <li key={choice.id}>
            <Link
              className="choice flex flex-col rounded-2xl border border-line bg-card px-5 py-4 hover:border-mark"
              href={`/plan/${build}/${choice.id}`}
            >
              <span className="text-lg font-bold">{choice.label}</span>
              <span className="mt-1 text-mute">{choice.hint}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link className="text-mute hover:text-ink" href="/start">
          Back. Pick a different thing to build.
        </Link>
      </p>
    </main>
  );
}
