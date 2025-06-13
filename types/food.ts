export type Food = {
  name: string;
  image?: string;
};

export type Subcategory = {
  categoryName: string;
  foodName: Food[];
};

export type Category = {
  id: number;
  category: string;
  subcategory?: Subcategory[];
  foodName?: Food[];
};
