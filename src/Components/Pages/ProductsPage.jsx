import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";
import ProductCard from "../ElementsUi/ProductCard";
import CategoryFilter from "../ElementsUi/CategoryFilter";

export default function ProductsPage({ products, cartCount = 0 }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const genero = searchParams.get("genero") || "Todos";
  const tipo = searchParams.get("tipo") || "Todos";
  const oferta = searchParams.get("oferta") || "Todos";

  const updateFilterParam = (key, value) => {
    const next = new URLSearchParams(searchParams);

    if (!value || value === "Todos") {
      next.delete(key);
    } else {
      next.set(key, value);
    }

    setSearchParams(next);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const productGenero = product.genero || "Unisex";
      const productTipo = product.tipo || "Deportivos";
      const hasOffer = !!product.discountPrice && product.discountPrice < product.price;

      const matchesGenero = genero === "Todos" || productGenero === genero;
      const matchesTipo = tipo === "Todos" || productTipo === tipo;
      const matchesOferta =
        oferta === "Todos" ||
        (oferta === "Con oferta" && hasOffer) ||
        (oferta === "Sin oferta" && !hasOffer);

      return matchesGenero && matchesTipo && matchesOferta;
    });
  }, [products, genero, tipo, oferta]);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-7xl mx-auto mt-24 px-4 py-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Productos</h3>

          <CategoryFilter
            genero={genero}
            tipo={tipo}
            oferta={oferta}
            onGeneroChange={(value) => updateFilterParam("genero", value)}
            onTipoChange={(value) => updateFilterParam("tipo", value)}
            onOfertaChange={(value) => updateFilterParam("oferta", value)}
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
