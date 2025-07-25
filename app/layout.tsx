import type { Metadata } from "next";
import "./globals.css";
import { eudoxusSansGX } from "../app/font";

export const metadata: Metadata = {
  title: "Content Funnel",
  description: "Content Funnel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${eudoxusSansGX.className} @container/main`}>
        {children}
      </body>
    </html>
  );
}
