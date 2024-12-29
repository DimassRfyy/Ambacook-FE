import { useEffect, useState } from "react";
import { Category } from "../types/type";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeResultCard from "../components/RecipeResultCard";

export default function CategoryLatestFeaturedRecipesWrapper() {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_BASE_URL}/category/${slug}`, {
        headers: {
          "X-API-KEY": import.meta.env.VITE_APP_API_KEY,
        },
      })
      .then((response) => {
        setCategory(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <p>loading</p>;
  }
  if (error) {
    return <p>error loading data: {error}</p>;
  }
  if (!category) {
    return <p>category not found</p>;
  }

  return (
    <>
      <section id="LatestRecipes" className="px-5 mt-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">Latest Recipes</h2>
        </div>
        <div className="flex flex-col gap-[18px] mt-[18px]">
          {category.recipes.length > 0 ? (
            category.recipes.map((recipe) => (
              <RecipeResultCard key={recipe.id} recipe={recipe} />
            ))
          ) : (
            <p>belum ada resep terkait</p>
          )}
        </div>
      </section>
    </>
  );
}
