import React, { useMemo, useState } from "react";

import Navbar from "./Components/Sections/Navbar"
import Banner from "./Components/Sections/Banner"
import OffersSection from "./Components/Sections/OffersSection"
import CategoriesSection from "./Components/Sections/CategoriesSection"
import FeaturedProductsSection from "./Components/Sections/FeaturedProductsSection"
import Footer from "./Components/Sections/Footer"



import { Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/ElementsUi/ProductDetail";
import ProductsPage from "./Components/Pages/ProductsPage";
import CartPage from "./Components/Pages/CartPage";
import { products as featuredProductsRaw } from "./assets/Data/products";
import { useParams } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Imagen de prueba
  const fallbackImage = "/src/assets/Img/pijama5.jpeg";
  const featuredProducts = featuredProductsRaw.map(p => ({
    ...p,
    image: p.image || fallbackImage
  }));

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.some((item) => item.product.id === product.id);
      if (exists) return prev;
      return [...prev, { product, quantity: 1 }];
    });
  };

  const increaseItem = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseItem = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar cartCount={cartCount} />
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
        element={
          <ProductDetailWrapper
            products={featuredProducts}
            onAddToCart={addToCart}
            cartCount={cartCount}
          />
        }
      />
      <Route
        path="/productos"
        element={<ProductsPage products={featuredProducts} cartCount={cartCount} />}
      />
      <Route
        path="/carrito"
        element={
          <CartPage
            cartItems={cartItems}
            cartCount={cartCount}
            onIncrease={increaseItem}
            onDecrease={decreaseItem}
            onCheckout={clearCart}
          />
        }
      />
    </Routes>
  );
}

// Wrapper para extraer el id de la URL y pasar el producto correcto
function ProductDetailWrapper({ products, onAddToCart, cartCount }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  return (
    <ProductDetail
      product={product}
      onAddToCart={onAddToCart}
      cartCount={cartCount}
    />
  );
}

export default App;
