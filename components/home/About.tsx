"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: imageRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
      invalidateOnRefresh: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const onImageLoad = () => {
    ScrollTrigger.refresh();
  };

  return (
    <div ref={imageRef} className="p-4 max-w-full mx-auto mb-8">
      <h1 className="text-center text-2xl pb-1">About me</h1>
      <p className="pt-2 pb-1 text-center">
        I’m a junior software developer who loves coding.{" "}
        <Link href="/about" className="text-white hover:underline">
          Read more about me
        </Link>
      </p>
      <Image
        src={"/option.jpg"}
        alt="hero"
        width={1050}
        height={350}
        className="outline-2 outline-white w-full h-auto max-h-[85vh] object-cover"
        onLoadingComplete={onImageLoad}
      />
    </div>
  );
}
