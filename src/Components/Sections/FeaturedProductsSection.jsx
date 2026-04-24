import React from "react";
import ProductCard from "../ElementsUi/ProductCard";

export default function FeaturedProductsSection({ products }) {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4 pt-6  pb-4 shadow-md shadow-indigo-100">
      {/* 🔥 Header */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          Destacados de la Semana
        </h3>
      </div>
      {/* 🧩 Grid */}
      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}