import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { CDN_LINK } from "./constants";

export const metadata: Metadata = {
  title: "BrickBot - Links",
  description: "Links relevant to our current initiatives.",
  icons: {
    icon: CDN_LINK + "/branding/favicon.ico",
  },
  alternates: {
    canonical: "https://links.brickbot.ro/",
  },
  openGraph: {
    url: "https://links.brickbot.ro/",
    siteName: "BrickBot - Links",
    images: [
      {
        url: CDN_LINK + "/branding/embed.png",
        width: 256,
        height: 256,
        alt: "BrickBot Icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [CDN_LINK + "/branding/embed.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden"
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href={CDN_LINK + "/branding/dark-favicon.ico"}
        />
      </head>
      <body className={`antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
