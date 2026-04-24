import React from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import ProductCard from "../ElementsUi/ProductCard";

export default function ProductsPage({ products }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto mt-24 px-4 py-10">
          {/* Encabezado */}
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Productos</h3>

          {/* Grid de productos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
