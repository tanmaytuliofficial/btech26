import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career OS",
  description: "The operating system for engineers chasing 30+ LPA offers.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}