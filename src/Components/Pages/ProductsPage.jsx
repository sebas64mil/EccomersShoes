import React, { useMemo, useState } from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import ProductCard from "../ElementsUi/ProductCard";
import CategoryFilter from "../ElementsUi/CategoryFilter";

export default function ProductsPage({ products, cartCount = 0 }) {
  const [genero, setGenero] = useState("Todos");
  const [tipo, setTipo] = useState("Todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productGenero = product.genero || "Unisex";
      const productTipo = product.tipo || "Deportivos";

      const matchesGenero = genero === "Todos" || productGenero === genero;
      const matchesTipo = tipo === "Todos" || productTipo === tipo;

      return matchesGenero && matchesTipo;
    });
  }, [products, genero, tipo]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto mt-24 px-4 py-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Productos</h3>

          <CategoryFilter
            genero={genero}
            tipo={tipo}
            onGeneroChange={setGenero}
            onTipoChange={setTipo}
          />

          <p className="text-sm text-gray-500 mb-6">
            Mostrando {filteredProducts.length} producto(s)
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-gray-600 mt-6">No hay productos para ese filtro.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
