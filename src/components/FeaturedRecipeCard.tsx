import { Link } from "react-router-dom";
import { Recipe } from "../types/type";

interface FeaturedRecipeCardProps {
  recipe: Recipe;
}

export default function FeaturedRecipeCard({
  recipe,
}: FeaturedRecipeCardProps) {
  const assetUrl = import.meta.env.VITE_APP_ASSET_URL;
  return (
    <>
      <Link to={`/recipe/${recipe.slug}`} className="card">
        <div className="relative w-[200px] h-[280px] rounded-[30px] bg-white overflow-hidden">
          <img
            src={`${assetUrl}/${recipe.thumbnail}`}
            className="absolute w-full h-full object-cover"
            alt="thumbnails"
          />
          <div className="gradient-filter absolute w-full h-full bg-[linear-gradient(180deg,rgba(0,0,0,0)40.47%,#000000_81.6%)] z-10" />
          <div className="relative flex flex-col h-full justify-between p-5 z-20">
            <div className="flex shrink-0 items-center w-fit rounded-full py-1 px-2 bg-white/20 backdrop-blur">
              <img
                src="/assets/images/icons/Star 1.svg"
                className="w-4 h-4"
                alt="star"
              />
              <span className="font-semibold text-xs leading-[18px] text-white">
                4.5
              </span>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h3 className="font-bold text-xl leading-[28px] text-white">
                {recipe.name}
              </h3>
              <p className="font-semibold text-xs leading-[18px] text-[#FF4C1C]">
                {recipe.category.name}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
