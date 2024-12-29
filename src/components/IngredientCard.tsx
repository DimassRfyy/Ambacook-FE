import { Ingredient } from "../types/type";
interface IngredientCardProps {
  ingredient: Ingredient;
}

export default function IngredientCard({ ingredient }: IngredientCardProps) {
  const assetUrl = import.meta.env.VITE_APP_ASSET_URL;
  return (
    <>
      <div className="flex flex-col items-center text-center w-full rounded-[20px] p-[14px] gap-[14px] bg-white shadow-[0_12px_30px_0_#D6D6D680]">
        <div className="thumbnail flex shrink-0 w-full aspect-[138.5/100] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={`${assetUrl}/${ingredient.photo}`}
            className="w-full h-full object-cover"
            alt="thumbnails"
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <p className="font-semibold">{ingredient.name}</p>
          <p className="text-sm leading-[21px] text-[#848486]">1 kilogram</p>
        </div>
      </div>
    </>
  );
}
