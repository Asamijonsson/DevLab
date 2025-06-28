"use client";

import { JSX, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Animation(): JSX.Element {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      gsap.fromTo(
        listRef.current.children,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen  py-8 px-4" id="main-content">
      <p className="text-center">Animation</p>
      <div className="flex justify-center items-center pb-50">
        <video
          controls
          width="100%"
          autoPlay
          muted
          style={{ borderRadius: "1rem" }}
        >
          <source src="/runrunrun.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
