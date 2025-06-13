"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className="p-4 max-w-xl mx-auto absolute-center">
      <h1 className="text-center">About me</h1>
      <Image
        src={"/option.jpg"}
        alt="hero"
        width={1050}
        height={350}
        className="outline-2 outline-white left-0 top-0 size-full object-cover"
      />
    </div>
  );
}
