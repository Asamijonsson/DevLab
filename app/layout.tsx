import type { Metadata } from "next";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          {children}
          <footer className="text-center text-sm text-white py-4">
            Asami Kanomata Jönsson ©2025
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
