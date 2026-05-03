import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iron Vein Supply — Automated. Secure. Always On.",
  description:
    "Iron Vein Supply installs secure automated supply nodes stocked with project-critical tools, consumables, PPE, and safety essentials — so your teams stay focused and downtime stays out of the budget.",
  metadataBase: new URL("https://ironveinsupply.com"),
  openGraph: {
    title: "Iron Vein Supply",
    description:
      "Automated supply infrastructure for high-friction environments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1 flex flex-col">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
