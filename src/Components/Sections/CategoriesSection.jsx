import React from "react";
import CategoryCard from "../ElementsUi/CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, title: "Hombre", image: "/Img/ImagenProduct4.png" },
  { id: 2, title: "Mujer", image: "/Img/ImagenProduct4.png" },
  { id: 3, title: "Deportivos", image: "/Img/ImagenProduct4.png" },
  { id: 4, title: "Formales", image: "/Img/ImagenProduct4.png" },
  { id: 5, title: "Verano", image: "/Img/ImagenProduct4.png" },
  { id: 6, title: "Trekking", image: "/Img/ImagenProduct4.png" },
];

export default function CategoriesSection() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryTitle) => {
    if (categoryTitle === "Hombre" || categoryTitle === "Mujer") {
      navigate(`/productos?genero=${encodeURIComponent(categoryTitle)}`);
      return;
    }

    navigate(`/productos?tipo=${encodeURIComponent(categoryTitle)}`);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      
<div className="grid grid-cols-5 auto-rows-[minmax(120px,1fr)] gap-4">

  <div className="col-span-2">
    <CategoryCard {...categories[0]} onClick={() => handleCategoryClick(categories[0].title)} />
  </div>

  <div>
    <CategoryCard {...categories[1]} onClick={() => handleCategoryClick(categories[1].title)} />
  </div>

  <div className="row-span-2">
    <CategoryCard {...categories[2]} onClick={() => handleCategoryClick(categories[2].title)} />
  </div>

  <div className="row-span-2">
    <CategoryCard {...categories[3]} onClick={() => handleCategoryClick(categories[3].title)} />
  </div>

  <div>
    <CategoryCard {...categories[4]} onClick={() => handleCategoryClick(categories[4].title)} />
  </div>

  <div className="col-span-2">
    <CategoryCard {...categories[5]} onClick={() => handleCategoryClick(categories[5].title)} />
  </div>

</div>
    </div>
  );
}