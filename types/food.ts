export interface Food {
  name: string;
  image?: string;
}

export interface Subcategory {
  categoryName: string;
  foodName: Food[];
}

export interface Category {
  id: number;
  category: string;
  subcategory?: Subcategory[];
  foodName?: Food[];
}
