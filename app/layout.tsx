import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify clone using Nextjs and Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background dark flex h-svh font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div className="h-full w-full overflow-clip">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
