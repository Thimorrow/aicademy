import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "That page is not here",
};

export default function NotFound() {
  return (
    <main id="main">
      <h1 className="display text-[2.35rem]">That page is not here.</h1>
      <p className="body quiet mt-4">
        Two questions still get you a first project. Or look at the tools.
      </p>
      <p className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link className="btn" href="/">
          Start
        </Link>
        <Link className="btn btn-quiet" href="/tools">
          Tools
        </Link>
      </p>
    </main>
  );
}
