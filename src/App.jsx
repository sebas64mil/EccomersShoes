import React from "react";

import Navbar from "./Components/Sections/Navbar";
import Banner from "./Components/Sections/Banner";
import OffersSection from "./Components/Sections/OffersSection";
import CategoriesSection from "./Components/Sections/CategoriesSection";
import FeaturedProductsSection from "./Components/Sections/FeaturedProductsSection";
import Footer from "./Components/Sections/Footer";

import { FaBeer, FaArrowRight, FaArrowLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <br /><br /><br />
      <Banner />
      <OffersSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <Footer />
    </>
  );
}

export default App;
