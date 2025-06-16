"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top", // start animation when image hits top of viewport
          end: "bottom+=100 top", // end animation after scrolling 100px beyond
          scrub: true, // sync with scroll
        },
      });
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Image
        src="/hero2.jpg"
        alt="hero"
        width={1920}
        height={400}
        className="w-full h-auto"
      />
      <p className="flex justify-center text-center pb-20">
        Hi, welcome to my website! This website is my hobby project lab
        (●&apos;◡&apos;●)
      </p>
    </div>
  );
}
