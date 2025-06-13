"use client";

import {
  signInWithGoogle,
  signOutUser,
  subscribeToAuthStateChanges,
} from "../lib/auth";
import { useState, useEffect, ReactNode } from "react";
import { User } from "firebase/auth";
import Navbar from "./Navbar";
import Image from "next/image";

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuthStateChanges(
      (firebaseUser: User | null) => {
        setUser(firebaseUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <header className="text-white">Loading Auth...</header>;
  }

  return (
    <div className="flex justify-center items-center pt-4 text-white gap-4">
      <Image src="/logo.png" alt="logo" width={50} height={75} />
      <Navbar />
      {user ? (
        <>
          <span>Hello, {user.displayName || user.email}!</span>
          <button onClick={signOutUser}>Sign Out</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Unlock Magic</button>
      )}
      {children}
    </div>
  );
}
