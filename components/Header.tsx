"use client";

import Navbar from "./Navbar";
import Image from "next/image";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <div className="flex justify-center items-center pt-4 text-white">
      <Image src={"/logo.png"} alt="logo" width={50} height={75} />
      <Navbar />
      {children}
    </div>
  );
}
