import { Link } from "react-router-dom";
import { Category } from "../types/type";

interface CategoryCardProps {
  category: Category;
}
export default function CategoryCard({ category }: CategoryCardProps) {
  const assetUrl = import.meta.env.VITE_APP_ASSET_URL;
  return (
    <>
      <Link to={`/category/${category.slug}`}>
        <div className="flex flex-col w-fit min-w-[90px] rounded-[31px] p-[10px] pb-5 gap-[10px] text-center bg-white shadow-[0_12px_30px_0_#D6D6D680] transition-all duration-300 hover:shadow-[0_10px_20px_0_#FF4C1C80] hover:bg-[#FF4C1C] hover:text-white">
          <div className="flex shrink-0 w-[70px] h-[70px] rounded-full bg-white">
            <img
              src={`${assetUrl}/${category.icon}`}
              className="object-cover w-full h-full object-top"
              alt="icon"
            />
          </div>
          <h3 className="font-semibold text-sm leading-[21px]">
            {category.name}
          </h3>
        </div>
      </Link>
    </>
  );
}
