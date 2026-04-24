import React from "react";

export default function CategoryCard({ title, image, onClick }) {
  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >

      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

      {/* Texto */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-lg md:text-xl font-semibold text-center px-2">
          {title}
        </h3>
      </div>

    </div>
  );
}