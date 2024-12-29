export interface Recipe {
  id: number;
  name: string;
  slug: string;
  url_file: string;
  url_video: string;
  author: Author;
  category: Category;
  thumbnail: string;
  tutorials: Tutorial[];
  recipe_ingredients: RecipeIngredient[];
  photos: Photo[];
  about: string;
}

interface Author {
  id: number;
  name: string;
  photo: string;
}

interface Photo {
  id: number;
  photo: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  recipes_count: number;
  recipes: Recipe[];
}

interface Tutorial {
  id: number;
  name: string;
}

interface RecipeIngredient {
  id: number;
  ingredient: Ingredient;
}

export interface Ingredient {
  id: number;
  name: string;
  photo: string;
}
