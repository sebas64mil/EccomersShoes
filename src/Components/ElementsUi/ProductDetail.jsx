import React, { useState } from "react";


import Button from "./Button";
import { FaCartPlus } from "react-icons/fa";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";


export default function ProductDetail({ product, onAddToCart, cartCount = 0 }) {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "/Img/pijama5.jpeg";

  if (!product) return <div>Producto no encontrado.</div>;

  const handleImageError = () => setImgError(true);

  const displayImage =
    imgError || !product.image ? fallbackImage : product.image;

  const handleAddToCart = () => {
    if (onAddToCart) onAddToCart(product);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartCount={cartCount} />
      <br /> <br /> <br />
      {/* CONTENT */}
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="max-w-3xl w-full bg-white shadow rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* IMAGE */}
            <img
              src={displayImage}
              alt={product.title}
              onError={handleImageError}
              className="w-full md:w-1/2 rounded-lg object-cover bg-gray-200"
            />

            {/* INFO */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-indigo-950">
                  {product.title}
                </h2>

                <div className="flex items-center gap-4 mt-2">
                  {product.discountPrice ? (
                    <>
                      <span className="text-xl font-semibold text-indigo-600">
                        ${product.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-indigo-300 line-through">
                        ${product.price.toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-xl font-semibold text-indigo-800">
                      ${product.price.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-indigo-950 mt-3">
                  {product.description || "Descripción del producto aquí..."}
                </p>
              </div>

              {/* BUTTON */}
              <div className="flex justify-end">
                <Button
                  size="large"
                  state="text"
                  icon={FaCartPlus}
                  onClick={handleAddToCart}
                >
                  Comprar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER SIEMPRE ABAJO */}
      <Footer />
    </div>
  );
}