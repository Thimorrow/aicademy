import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Fraunces } from "next/font/google";
import { Header } from "./components/Header";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["WONK", "SOFT"],
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
  metadataBase: new URL("https://aicademy-mu.vercel.app"),
  title: {
    default: "aicademy",
    template: "%s · aicademy",
  },
  description:
    "Build something real with AI when you have no money, no payment method, and no idea how to code.",
  openGraph: {
    title: "aicademy",
    description: "Two questions. A first project for this afternoon. No money needed.",
    locale: "en",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${atkinson.variable}`}>
      <body>
        <a className="skip btn" href="#main">
          Skip to content
        </a>
        <div className="sheet">
          <Header />
          {children}
          <footer className="site-foot quiet mt-16 border-t border-line pt-5 text-sm">
            <p>
              Free plans change. The date on each tool is when we last checked. This is not
              legal advice. No login on this site.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
