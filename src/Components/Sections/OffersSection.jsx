import React, { useRef, useState } from "react";
import ProductCard from "../ElementsUi/ProductCard";
import Button from "../ElementsUi/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: "Nike Air Max 270 React Hombre Deportivo Running",
  price: 500000,
  discountPrice: 399000,
  image: "./src/assets/Img/pijama5.jpeg",
}));

export default function OffersSection() {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const maxVisible = 3;
  const totalPages = Math.ceil(products.length / maxVisible);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;

    let newIndex;

    if (direction === "right") {
      newIndex = index + 1 >= totalPages ? 0 : index + 1;
    } else {
      newIndex = index - 1 < 0 ? totalPages - 1 : index - 1;
    }

    setIndex(newIndex);

    container.scrollTo({
      left: newIndex * containerWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4">
      
      <div className="flex gap-6 items-stretch">

        {/* 🟨 IZQUIERDA */}
        <div className="w-[40%]">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">
            
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Oferta del día
            </h3>

            <div className="flex-1">
              <ProductCard
                variant="large"
                title="Nike Air Max 270 React Hombre Deportivo Running"
                price={500000}
                discountPrice={399000}
                image="/src/assets/Img/pijama5.jpeg"
              />
            </div>

          </div>
        </div>

        {/* 🟦 DERECHA */}
        <div className="w-[60%]">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col h-full">

            {/* HEADER ARRIBA */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-800">
                Ofertas
              </h3>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 w-6 rounded-full ${
                      i === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CONTENEDOR DEL CARRUSEL */}
            <div className="relative flex-1 flex items-center">

              {/* Carrusel */}
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-hidden scroll-smooth w-full"
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="shrink-0"
                    style={{
                      flexBasis: `calc((100% - 3rem) / ${maxVisible})`,
                    }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              {/* Botón izquierda */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <Button
                  onClick={() => scroll("left")}
                  size="large"
                  onlyIcon
                  icon={FaChevronLeft}
                />
              </div>

              {/* Botón derecha */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <Button
                  onClick={() => scroll("right")}
                  size="large"
                  onlyIcon
                  icon={FaChevronRight}
                />
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}