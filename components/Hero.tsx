"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  return (
    <div className="h-dvh w-screen overflow-x-hidden polygon(0 0, 100% 0, 100% 100%, 0 100%) ">
      <Image
        src={"/hero2.jpg"}
        alt="hero"
        width={1720}
        height={250}
        className="w-full h-auto"
      />

      <p className="flex justify-center pt-4">
        Hi, welcome to my website! This website is my hobby project lab
        (●&apos;◡&apos;●)
      </p>
    </div>
  );
}
