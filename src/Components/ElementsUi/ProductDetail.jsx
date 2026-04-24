import React, { useState } from "react";


import Button from "./Button";
import { FaShoppingCart , FaCartPlus} from "react-icons/fa";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";


export default function ProductDetail({ product }) {
  const [imgError, setImgError] = useState(false);
  const fallbackImage = "/src/assets/Img/pijama5.jpeg";
  
  if (!product) return <div>Producto no encontrado.</div>;
  
  const handleImageError = () => {
    setImgError(true);
  };
  
  const displayImage = imgError || !product.image ? fallbackImage : product.image;
  
  return (
    <>
      <Navbar />
      <br /><br /><br />
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={displayImage}
            alt={product.title}
            onError={handleImageError}
            className="w-full md:w-1/2 rounded-lg object-cover bg-gray-200"
          />
          <div className="flex-1 flex flex-col gap-4 justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
              <div className="flex items-center gap-4">
                {product.discountPrice ? (
                  <>
                    <span className="text-xl font-semibold text-green-600">
                      ${product.discountPrice.toLocaleString()}
                    </span>
                    <span className="text-gray-400 line-through">
                      ${product.price.toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="text-xl font-semibold text-gray-800">
                    ${product.price.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mt-2">{product.description || "Descripción del producto aquí..."}</p>
            </div>
            {/* Botón de compra alineado abajo a la derecha */}
            <div className="flex justify-end mt-8">
              <Button
                size="large"
                state="text"
                icon={FaCartPlus}
              >
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
