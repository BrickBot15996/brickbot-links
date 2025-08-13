import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BrickBot - Links",
  description: "BrickBot's custom implementation of linktree.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anekLatin.variable} antialiased flex flex-col items-center justify-start`}
      >
        {children} <Analytics />
      </body>
    </html>
  );
}
