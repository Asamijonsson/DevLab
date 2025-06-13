import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Food = {
  name: string;
};

type Subcategory = {
  categoryName: string;
  foodName: Food[];
};

type Category = {
  id: number;
  category: string;
  subcategory?: Subcategory[];
  foodName?: Food[];
};

export default function CategoryList() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const receipe: Category[] = [
    {
      id: 0,
      category: "Party",
      subcategory: [
        {
          categoryName: "Appetizers",
          foodName: [{ name: "Kimchi" }, { name: "Harumaki" }],
        },
        {
          categoryName: "Main",
          foodName: [{ name: "Okonomiyaki" }, { name: "Tonkatsu" }],
        },
        {
          categoryName: "Dessert",
          foodName: [{ name: "Goma dango" }, { name: "Matcha ice cream" }],
        },
      ],
    },
    {
      id: 1,
      category: "Casual dinner",
      foodName: [
        { name: "Tempura" },
        { name: "Yakitori" },
        { name: "Gyu Tataki" },
      ],
    },
    {
      id: 3,
      category: "Sushi",
      foodName: [{ name: "Maki Sushi" }, { name: "Nigiri" }],
    },
    {
      id: 4,
      category: "Ramen",
      foodName: [{ name: "Tonkotsu Ramen" }, { name: "Miso Ramen" }],
    },
  ];

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

  const renderMenuItems = (item: Category) => {
    if (item.subcategory) {
      return item.subcategory.map((sub, i) => (
        <div key={i} className="ml-4 mt-2">
          <p className="font-semibold">{sub.categoryName}</p>
          <ul className="list-disc list-inside text-gray-700">
            {sub.foodName.map((food, idx) => (
              <li key={idx}>{food.name}</li>
            ))}
          </ul>
        </div>
      ));
    } else if (item.foodName) {
      return (
        <ul className="ml-4 list-disc list-inside text-gray-700 mt-2">
          {item.foodName.map((food, idx) => (
            <li key={idx}>{food.name}</li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen py-8 px-4" id="main-content">
      <div className="max-w-2xl mx-auto">
        <ul ref={listRef} className="space-y-4">
          {receipe.map((item) => (
            <li key={item.id}>
              <button
                className={`w-full text-left bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                aria-expanded={openCategory === item.id}
                type="button"
                onClick={() =>
                  setOpenCategory(openCategory === item.id ? null : item.id)
                }
              >
                {item.category}
              </button>
              {openCategory === item.id && renderMenuItems(item)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
