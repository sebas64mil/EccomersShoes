import React from "react";

import Navbar from "./Components/Sections/Navbar";
import Banner from "./Components/Sections/Banner";
import OffersSection from "./Components/Sections/OffersSection";
import CategoriesSection from "./Components/Sections/CategoriesSection";

import { FaBeer, FaArrowRight, FaArrowLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <OffersSection />
      <CategoriesSection />
    </>
  );
}

export default App;
