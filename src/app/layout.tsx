import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrickBot - Links",
  description: "Links relevant to our current initiatives.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://links.brickbot.ro/",
  },
  openGraph: {
    url: "https://links.brickbot.ro/",
    siteName: "BrickBot - Links",
    images: [
      {
        url: "https://brickbot.ro/embed-icon.png",
        width: 256,
        height: 256,
        alt: "BrickBot Icon",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://brickbot.ro/embed-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/dark-bg-favicon.ico"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${anekLatin.variable} antialiased flex flex-col items-center justify-start`}
      >
        {children} <Analytics />
      </body>
    </html>
  );
}
