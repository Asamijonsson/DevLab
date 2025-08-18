import { JSX } from "react";
import type { Category } from "@/types/food";
import Image from "next/image";

type Props = {
  item: Category;
};

export default function RenderMenuItems({ item }: Props): JSX.Element | null {
  return (
    <>
      <ul className="flex ml-4 list-none list-inside text-white mt-2">
        {item.foodName?.map((food, idx) => (
          <li key={idx} className="mr-4">
            {food.image && (
              <Image
                src={food.image}
                alt={food.name}
                width={250} 
                height={50} 
                className="mt-1 rounded"
                loading="lazy"
              />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
