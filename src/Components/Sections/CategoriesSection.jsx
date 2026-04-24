import React from "react";
import CategoryCard from "../ElementsUi/CategoryCard";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: 1, title: "Hombre", image: "https://nikeco.vtexassets.com/assets/vtex.file-manager-graphql/images/babb0f89-04f6-4995-a654-e0394f5f62ec___4c17391da9dc9359c22c6a8afa12dda7.jpg" },
  { id: 2, title: "Mujer", image: "https://nikeco.vtexassets.com/assets/vtex.file-manager-graphql/images/cac74e2e-e7e5-44f2-b4c1-7a067d2b1228___c7b5354df61392070db5f7e72f43ac8b.jpg" },
  { id: 3, title: "Deportivos", image: "https://nikeco.vtexassets.com/assets/vtex.file-manager-graphql/images/1454241b-8301-435a-b372-c090df936ea9___ae6d85bea0921dcb5fcb2fb24bc91f00.jpg" },
  { id: 4, title: "Formales", image: "https://static.zara.net/assets/public/bd18/c32c/428644a787b0/ceb2d5b19559/T9467153312-p/T9467153312-p.jpg?ts=1776933097646&w=748" },
  { id: 5, title: "Verano", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaesXo80E2bYSz5CRdt2fnuN8e1LVGtx1m8A&s" },
  { id: 6, title: "Trekking", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpl81oTjhXjaCtJXG97qEK5dlzWe9QaU-gw&s" },
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
      
<div className="grid grid-cols-1 md:grid-cols-5 auto-rows-[minmax(120px,1fr)] gap-4">

  <div className="md:col-span-2">
    <CategoryCard {...categories[0]} onClick={() => handleCategoryClick(categories[0].title)} />
  </div>

  <div>
    <CategoryCard {...categories[1]} onClick={() => handleCategoryClick(categories[1].title)} />
  </div>

  <div className="md:row-span-2">
    <CategoryCard {...categories[2]} onClick={() => handleCategoryClick(categories[2].title)} />
  </div>

  <div className="md:row-span-2">
    <CategoryCard {...categories[3]} onClick={() => handleCategoryClick(categories[3].title)} />
  </div>

  <div>
    <CategoryCard {...categories[4]} onClick={() => handleCategoryClick(categories[4].title)} />
  </div>

  <div className="md:col-span-2">
    <CategoryCard {...categories[5]} onClick={() => handleCategoryClick(categories[5].title)} />
  </div>

</div>
    </div>
  );
}