import { useEffect, useState } from "react";
import { Category } from "../types/type";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedRecipeCard from "../components/FeaturedRecipeCard";

export default function CategoryFeaturedRecipesWrapper() {
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
      <section id="MadeByPeople" className="mt-[30px]">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-bold">Made by People</h2>
        </div>
        <div className="swiper w-full mt-3">
          <Swiper
            className="w-full mt-3"
            direction="horizontal"
            spaceBetween={16}
            slidesPerView="auto"
            slidesOffsetBefore={20}
            slidesOffsetAfter={20}
          >
            {category.recipes.length > 0 ? (
              category.recipes.map((recipe) => (
                <SwiperSlide key={recipe.id} className="!w-fit">
                  <FeaturedRecipeCard recipe={recipe} />
                </SwiperSlide>
              ))
            ) : (
              <p className="px-5">
                belum ada data recipe dari kategori terkait
              </p>
            )}
          </Swiper>
        </div>
      </section>
    </>
  );
}
