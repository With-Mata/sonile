import type { Metadata } from "next";
import "./globals.css";
import { eudoxusSansGX } from "../app/font";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/next";
import appConfig from "@/config/app-config";

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    title: appConfig.name,
    description: appConfig.description,
    url: appConfig.url,
    siteName: appConfig.name,
    images: {
      url: appConfig.imageUrl,
      type: "image/png",
      width: 1200,
      height: 630,
      alt: appConfig.description,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${eudoxusSansGX.className} @container/main`}>
        <NuqsAdapter>{children}</NuqsAdapter>
        <Analytics />
      </body>
    </html>
  );
}
