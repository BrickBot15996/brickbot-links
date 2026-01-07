import type { Metadata } from "next";
import "./globals.css";

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
      <link
        rel="icon"
        type="image/x-icon"
        href="/dark-bg-favicon.ico"
      />
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
