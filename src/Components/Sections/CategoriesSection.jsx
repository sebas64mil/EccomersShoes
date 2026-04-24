import React from "react";
import CategoryCard from "../ElementsUi/CategoryCard";

const categories = [
  { id: 1, title: "Hombre", image: "src/assets/Img/ImagenProduct4.png" },
  { id: 2, title: "Mujer", image: "src/assets/Img/ImagenProduct4.png" },
  { id: 3, title: "Niños", image: "src/assets/Img/ImagenProduct4.png" },
  { id: 4, title: "Deportes", image: "src/assets/Img/ImagenProduct4.png" },
  { id: 5, title: "Accesorios", image: "src/assets/Img/ImagenProduct4.png" },
  { id: 6, title: "Ofertas", image: "src/assets/Img/ImagenProduct4.png" },
];

export default function CategoriesSection() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      
<div className="grid grid-cols-5 auto-rows-[minmax(120px,1fr)] gap-4">

  <div className="col-span-2">
    <CategoryCard {...categories[0]} />
  </div>

  <div>
    <CategoryCard {...categories[1]} />
  </div>

  <div className="row-span-2">
    <CategoryCard {...categories[2]} />
  </div>

  <div className="row-span-2">
    <CategoryCard {...categories[3]} />
  </div>

  <div>
    <CategoryCard {...categories[4]} />
  </div>

  <div className="col-span-2">
    <CategoryCard {...categories[5]} />
  </div>

</div>
    </div>
  );
}