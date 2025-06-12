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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="text-center text-sm text-gray-500 py-4">
          Asami Kanomata Jönsson ©2025
        </footer>
      </body>
    </html>
  );
}
