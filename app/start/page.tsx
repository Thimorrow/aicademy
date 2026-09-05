import type { Metadata } from "next";
import Link from "next/link";
import { buildChoices } from "@/data/aicademy";

export const metadata: Metadata = { title: "Start" };

export default function StartPage() {
  return (
    <main id="main" className="pb-16">
      <p className="text-sm text-mute">Question 1 of 2</p>
      <h1 className="display mt-2 text-4xl leading-tight text-balance sm:text-5xl">
        What do you want to build?
      </h1>
      <p className="mt-4 max-w-xl text-mute">Pick the closest match. You can change your mind later.</p>
      <ul className="mt-8 grid gap-3">
        {buildChoices.map((choice) => (
          <li key={choice.id}>
            <Link
              className="choice flex flex-col rounded-2xl border border-line bg-card px-5 py-4 hover:border-mark"
              href={`/start/${choice.id}`}
            >
              <span className="text-lg font-bold">{choice.label}</span>
              <span className="mt-1 text-mute">{choice.hint}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
