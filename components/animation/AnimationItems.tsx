import { JSX } from "react";
import type { Animation } from "@/types/anime";
import Image from "next/image";

type Props = {
  items: Animation;
};

export default function AnimationItems({ items }: Props): JSX.Element | null {
  return (
    <>
      <ul className="flex ml-4 list-none list-inside justify-center text-white mt-2">
        {items.video && (
          <div className="flex flex-col items-center">
            <video
              controls
              width="100%"
              autoPlay
              muted
              style={{ borderRadius: "1rem" }}
              className="h-full max-h-[60vh] w-auto object-contain"
            >
              <source src={items.video} type="video/mp4" />
            </video>
            <p>{items.desc}</p>
          </div>
        )}
        {items.image && (
          <div className="flex flex-col items-center">
            <Image
              src={items.image}
              alt={items.title}
              width={900} // set appropriate width
              height={250} // set appropriate height
              className="mt-1 rounded"
              loading="lazy"
            />
            <p>{items.desc}</p>
          </div>
        )}
      </ul>
    </>
  );
}
