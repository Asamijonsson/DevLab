"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <Image
        src={"/hero.jpg"}
        alt="hero"
        width={1050}
        height={350}
        className="outline-2 outline-white"
      />
      <h1 className="flex justify-center pt-4">
        Hi, welcome to my website! This website is my hobby project lab (●'◡'●)
      </h1>
    </div>
  );
}
