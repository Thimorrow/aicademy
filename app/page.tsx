import type { Metadata } from "next";
import { buildChoices, tipByPlace } from "@/data/aicademy";
import { ChoiceLink, Progress } from "./components/ChoiceLink";

export const metadata: Metadata = {
  title: "aicademy",
};

export default function Home() {
  const pace = tipByPlace("home-pace");

  return (
    <main id="main">
      <p className="body quiet text-base">
        Two questions. A first project for this afternoon. You do not need money, a payment
        card, or any coding.
      </p>
      <Progress step={1} />
      <h1 className="display mt-2 text-[2.35rem] leading-[1.08] sm:text-5xl">
        What do you want to build?
      </h1>
      <ul className="mt-7 grid gap-2.5">
        {buildChoices.map((choice) => (
          <li key={choice.id}>
            <ChoiceLink href={`/start/${choice.id}`} hint={choice.hint} title={choice.label} />
          </li>
        ))}
      </ul>
      <aside className="note mt-12">
        <h2 className="display text-2xl">{pace.title}</h2>
        <p className="body quiet mt-2">{pace.body}</p>
      </aside>
    </main>
  );
}
