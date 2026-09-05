import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILD_KINDS, buildChoices, deviceChoices } from "@/data/aicademy";
import { isBuildKind } from "@/lib/plan";
import { ChoiceLink, Progress } from "../../components/ChoiceLink";

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

  const chosenLabel = buildChoices.find((item) => item.id === build)?.label?.toLowerCase();

  return (
    <main id="main">
      <Progress step={2} />
      <h1 className="display mt-2 text-[2.35rem] leading-[1.08] sm:text-5xl">
        Where are you working today?
      </h1>
      <p className="body quiet mt-3">
        For {chosenLabel}, this only changes which tool we start with.
      </p>
      <ul className="mt-7 grid gap-2.5">
        {deviceChoices.map((choice) => (
          <li key={choice.id}>
            <ChoiceLink
              href={`/plan/${build}/${choice.id}`}
              hint={choice.hint}
              title={choice.label}
            />
          </li>
        ))}
      </ul>
      <p className="mt-8">
        <Link className="link" href="/">
          Back. Pick a different thing to build.
        </Link>
      </p>
    </main>
  );
}
