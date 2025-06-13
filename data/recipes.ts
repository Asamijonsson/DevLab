import type { Category } from "@/types/food";

export const recipes: Category[] = [
  {
    id: 0,
    category: "Party Food",

    foodName: [
      { name: "Aburi Hotate", image: "/appetizers/hotate.JPG" },

      { name: "Kimchi", image: "/appetizers/kimchi.JPG" },
      { name: "Harumaki", image: "/appetizers/harumaki.JPG" },
      { name: "Okonomiyaki", image: "/appetizers/okonomiyaki.JPG" },
    ],
  },
  {
    id: 1,
    category: "Casual Dinner",
    foodName: [
      { name: "Tempura", image: "/casualdinner/tempura.JPG" },
      { name: "Yakitori", image: "/casualdinner/yakitori.JPG" },
      { name: "Gyu Tataki", image: "/casualdinner/tataki.JPG" },
      { name: "Korokke", image: "/casualdinner/korokke.JPG" },
    ],
  },
  {
    id: 3,
    category: "Sushi",
    foodName: [
      { name: " ", image: "/sushi/veg.JPG" },
      { name: " ", image: "/sushi/lax.JPG" },
      { name: " ", image: "/sushi/maki.JPG" },
    ],
  },
  {
    id: 4,
    category: "Ramen",
    foodName: [
      { name: " ", image: "/ramen/ramen2.JPG" },
      { name: " ", image: "/ramen/ramen3.JPG" },
      { name: " ", image: "/ramen/ramen1.JPG" },
      { name: " ", image: "/ramen/ramen4.JPG" },
    ],
  },
];
