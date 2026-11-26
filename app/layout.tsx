import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin's Keeping Services | Digital Systems that Keep Business Moving",
  description: "Custom software, web applications, API integrations, and technology consulting from Austin's Keeping Services LLC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
