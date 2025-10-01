import type { Metadata } from "next";
import Header from "@/components/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Asami's DevLab",
  description: "Developer Lab",
  icons: {
    icon: "/icons/logo.png",
  },
};

export const dynamic = "auto";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <footer className="text-center text-sm text-white pb-4">
          Asami Kanomata Jönsson ©2025
        </footer>
      </body>
    </html>
  );
}
