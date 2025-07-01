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
      ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
      });
    }

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={imageRef} className="w-full overflow-x-hidden">
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
