import React from "react";

import Navbar from "./Components/Sections/Navbar"
import Banner from "./Components/Sections/Banner"
import OffersSection from "./Components/Sections/OffersSection"
import CategoriesSection from "./Components/Sections/CategoriesSection"
import FeaturedProductsSection from "./Components/Sections/FeaturedProductsSection"
import Footer from "./Components/Sections/Footer"



import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ElementsUi/ProductDetail";
import ProductsPage from "./Components/Pages/ProductsPage";
import { products as featuredProductsRaw } from "./assets/Data/products";

function App() {
  // Imagen de prueba
  const fallbackImage = "/src/assets/Img/pijama5.jpeg";
  const featuredProducts = featuredProductsRaw.map(p => ({
    ...p,
    image: p.image || fallbackImage
  }));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <br /><br /><br />
            <Banner />
            <OffersSection />
            <CategoriesSection />
            <FeaturedProductsSection products={featuredProducts} />
            <Footer />
          </>
        }
      />
      <Route
        path="/producto/:id"
        element={<ProductDetailWrapper products={featuredProducts} />}
      />
      <Route
        path="/productos"
        element={<ProductsPage products={featuredProducts} />}
      />
    </Routes>
  );
}

// Wrapper para extraer el id de la URL y pasar el producto correcto
import { useParams } from "react-router-dom";
function ProductDetailWrapper({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  return <ProductDetail product={product} />;
}

export default App;
