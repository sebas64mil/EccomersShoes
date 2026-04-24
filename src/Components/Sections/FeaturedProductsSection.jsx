import React from "react";
import ProductCard from "../ElementsUi/ProductCard";

const featuredProducts = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: "Nike Air Max 270 React Hombre Deportivo Running",
  price: 500000,
  discountPrice: 399000,
  image: "/src/assets/Img/pijama5.jpeg",
}));

export default function FeaturedProductsSection() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4 pt-6  pb-4 shadow">
      
      {/* 🔥 Header */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          Destacados de la Semana
        </h3>
      </div>

      {/* 🧩 Grid */}
      <div className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-5 
        gap-4
      ">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

    </div>
  );
}