import Link from "next/link";
import { tipByPlace } from "@/data/aicademy";

export default function Home() {
  const pace = tipByPlace("home-pace");

  return (
    <main id="main" className="pb-16">
      <p className="text-sm font-bold tracking-wide text-mark uppercase">Free to start</p>
      <h1 className="display mt-3 max-w-[18ch] text-5xl leading-[1.05] text-balance sm:text-6xl">
        Build something real this afternoon.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
        You do not need money. You do not need a payment card. You do not need to know how
        to code. Answer two questions. Get a first project, a tool you can actually use,
        and what to do when the free pile runs out.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          className="choice inline-flex items-center justify-center rounded-full bg-mark px-6 py-3 text-base font-bold text-paper hover:bg-mark-deep"
          href="/start"
        >
          Find my first project
        </Link>
        <Link className="choice inline-flex items-center px-2 py-3 text-mute hover:text-ink" href="/tools">
          Or look at the tools
        </Link>
      </div>
      <aside className="mt-14 rounded-2xl border border-line bg-card p-5 sm:p-6">
        <h2 className="display text-2xl">{pace.title}</h2>
        <p className="mt-3 leading-relaxed text-mute">{pace.body}</p>
      </aside>
    </main>
  );
}
