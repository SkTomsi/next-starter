import { AppNavbar } from "@/components/shared/app-navbar/nav-bar";
import { Providers } from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fire-stack: A light-weight Next.js starter",
  description:
    "A lightweight and scalable Next.js starter pack with all the necessary rules and formatting? Bro, that's straight-up fire! Perfect for keeping it sleek and lit, with all the essentials to make it pop. 🔥💻",
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
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body
        className={` ${geistSans.className} ${geistMono.variable} min-w-screen min-h-screen antialiased`}
      >
        <div className="flex h-full w-full flex-col">
          <Providers>
            <AppNavbar />
            <main className="flex-grow">{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
