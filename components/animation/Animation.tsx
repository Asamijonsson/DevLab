"use client";

import { JSX, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CategoryButton from "../home/CategoryButton";
import { animations } from "@/data/animation";
import type { Animation } from "@/types/anime";
import AnimationItems from "./AnimationItems";

export default function Animation(): JSX.Element {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
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
  const toggleCategory = (id: number): void => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section className="min-h-screen pt-25 py-8 px-4" id="main-content">
      <p className="text-center">
        Animation
        <br /> I grew up with ACG culture, I loved drawing, and created 3D
        animation as a hobby
      </p>

      <div className="flex justify-center items-center pb-10">
        <video controls autoPlay muted style={{ borderRadius: "1rem" }}>
          <source src="/videos/runrunrun.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <div className="max-w-2xl mx-auto">
        <ul ref={listRef} className="space-y-4">
          {animations.map((item: Animation) => (
            <li key={item.id}>
              <CategoryButton
                isOpen={openCategory === item.id}
                label={item.title}
                onClick={() => toggleCategory(item.id)}
              />
              {openCategory === item.id && <AnimationItems items={item} />}
            </li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}
