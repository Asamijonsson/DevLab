"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full overflow-x-hidden">
      <Image
        src="/hero2.jpg"
        alt="hero"
        width={1920}
        height={380}
        className=" h-[60vh] sm:h-[70vh] md:h-[73vh] lg:h-[88vh] object-cover"
      />
      <p className="flex justify-center text-center pb-20">
        Hi, welcome to my website! This website is my hobby project lab
        (●&apos;◡&apos;●)
      </p>
    </div>
  );
}
