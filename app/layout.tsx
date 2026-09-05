import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "aicademy",
    template: "%s · aicademy",
  },
  description:
    "Build something real with AI when you have no money, no payment method, and no idea how to code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${atkinson.variable}`}>
      <body className="relative">
        <a className="skip rounded-md bg-mark px-3 py-2 text-paper" href="#main">
          Skip to content
        </a>
        <div className="relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col px-5 py-6 sm:px-8">
          <header className="flex items-baseline justify-between gap-4 pb-8">
            <Link className="display text-2xl tracking-tight" href="/">
              aicademy
            </Link>
            <nav className="flex gap-5 text-sm text-mute">
              <Link className="hover:text-ink" href="/start">
                Start
              </Link>
              <Link className="hover:text-ink" href="/tools">
                Tools
              </Link>
            </nav>
          </header>
          {children}
          <footer className="mt-auto border-t border-line pt-6 pb-4 text-sm text-mute">
            <p>
              Free plans change. The date on each tool is when we last checked. This is not
              legal advice.
            </p>
            <p className="mt-2">No paid tools. No login on this site. English only.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
