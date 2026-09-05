"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();
  const startCurrent = path === "/" || path.startsWith("/start");
  const toolsCurrent = path.startsWith("/tools");

  return (
    <header className="flex items-center justify-between gap-4 pb-6 sm:pb-10">
      <Link className="brand display text-[1.65rem] leading-none" href="/">
        aicademy
      </Link>
      <nav className="nav flex gap-5 text-sm text-mute">
        <Link aria-current={startCurrent ? "page" : undefined} href="/">
          Start
        </Link>
        <Link aria-current={toolsCurrent ? "page" : undefined} href="/tools">
          Tools
        </Link>
      </nav>
    </header>
  );
}
