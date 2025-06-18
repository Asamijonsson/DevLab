"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);
export default function About() {
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
    <div className="p-4 max-w-full mx-auto absolute-center">
      <h1 className="text-center text-2xl pb-1">About me</h1>
      <Image
        src={"/option.jpg"}
        alt="hero"
        width={1050}
        height={350}
        className="outline-2 outline-white w-full h-auto"
      />
      <p className="pt-2 text-center">
        I’m a passionate front-end developer with a love for creating intuitive
        and dynamic user interfaces. With a foundation in HTML, CSS, and
        JavaScript, I specialize in building responsive and accessible web
        applications.
      </p>
    </div>
  );
}
