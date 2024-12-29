import { Link, useParams } from "react-router-dom";
import CategoryFeaturedRecipesWrapper from "../wrappers/CategoryFeaturedRecipesWrapper";
import { useEffect, useState } from "react";
import { Category } from "../types/type";
import axios from "axios";
import CategoryLatestFeaturedRecipesWrapper from "../wrappers/CategoryLatestFeaturedRecipesWrapper";

export default function CategoryDetails() {
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

  const assetUrl = import.meta.env.VITE_APP_ASSET_URL;

  return (
    <>
      <nav className="absolute top-0 flex w-full max-w-[640px] items-center justify-between px-5 mt-[30px] z-20">
        <Link to={"/"}>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
            <img
              src="/assets/images/icons/arrow-left.svg"
              className="w-5 h-5 object-contain"
              alt="icon"
            />
          </div>
        </Link>
        <h1 className="font-semibold text-white">Category</h1>
        <button className="appearance-none">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
            <img
              src="/assets/images/icons/more.svg"
              className="w-5 h-5 object-contain"
              alt="icon"
            />
          </div>
        </button>
      </nav>
      <header className="relative w-full h-fit flex flex-col shrink-0 rounded-b-[40px]">
        <div className="relative flex shrink-0 w-full h-[260px] rounded-b-[40px] bg-black overflow-hidden -mb-[45px]">
          <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180.17deg,rgba(0,0,0,0)42.98%,rgba(0,0,0,0.76)79.32%)] z-10 rotate-180" />
          <img
            src="/assets/images/thumbnails/category-background.png"
            className="w-full h-full object-cover"
            alt="thumbnail"
          />
        </div>
        <div className="relative px-5 z-10">
          <div className="flex items-center justify-between w-full rounded-[20px] p-[10px_20px] gap-4 bg-white shadow-[0_12px_30px_0_#D6D6D640]">
            <div className="flex items-center gap-[10px]">
              <div className="w-[70px] h-[70px] overflow-hidden">
                <img
                  src={`${assetUrl}/${category.icon}`}
                  className="w-full h-full object-cover"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[27px]">
                  {category.name}
                </p>
                <p className="text-sm leading-[21px] text-[#848486]">
                  {category.recipes_count} Recipes
                </p>
              </div>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white overflow-hidden shadow-[0_10px_20px_0_#D6D6D6AB]">
              <img src="/assets/images/icons/heart-black.svg" alt="icon" />
            </button>
          </div>
        </div>
      </header>
      <CategoryFeaturedRecipesWrapper />
      <CategoryLatestFeaturedRecipesWrapper />
    </>
  );
}
