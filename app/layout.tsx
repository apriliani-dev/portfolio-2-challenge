import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willy Nielsen - Frontend Developer",
  description: "Portfolio of Willy Nielsen - Expert React Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}