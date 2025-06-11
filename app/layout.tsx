import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My DevLab",
  description: "Developer Lab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
