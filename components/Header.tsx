"use client";

import {
  signInWithGoogle,
  signOutUser,
  subscribeToAuthStateChanges,
} from "../lib/auth";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
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
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center gap-5 px-6 py-4">
        <a href="./">
          <Image src="/logo.png" alt="logo" width={50} height={75} />
        </a>
        <Navbar />
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span>Hello, {user.displayName || user.email}!</span>
              <button onClick={signOutUser}>Sign Out</button>
            </>
          ) : (
            <button onClick={signInWithGoogle}>Unlock Magic</button>
          )}
        </div>
      </div>
    </header>
  );
}
