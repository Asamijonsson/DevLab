"use client";

import { JSX, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import FoodItems from "./FoodItems";
import CategoryButton from "../home/CategoryButton";
import { recipes } from "@/data/recipes";
import type { Category } from "@/types/food";
import Image from "next/image";

export default function CategoryList(): JSX.Element {
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
    <section className="min-h-screen  py-8 px-4" id="main-content">
      <p className="text-center">
        Cooking
        <br />I love cooking because I love eating!
      </p>
      <div className="flex justify-center items-center pb-10">
        <Image
          src="/foodmain.jpg"
          alt="food"
          width={900} // set appropriate width
          height={250} // set appropriate height
          className="mt-1 rounded"
          loading="lazy"
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <ul ref={listRef} className="space-y-4">
          {recipes.map((item: Category) => (
            <li key={item.id}>
              <CategoryButton
                isOpen={openCategory === item.id}
                label={item.category}
                onClick={() => toggleCategory(item.id)}
              />
              {openCategory === item.id && <FoodItems item={item} />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
