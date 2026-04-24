import React, { useState } from "react";
import Button from "../ElementsUi/Button";
import { FaSearch, FaShoppingCart, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">
      {/* NAVBAR */}
      <nav className="w-full max-w-7xl flex items-center justify-between py-4 px-8 bg-white shadow rounded-full mt-4 mx-4">
        <h1 className="text-2xl font-lemon">Walkora</h1>
        <div className="flex gap-4">
          <Button state="text" size="medium" onClick={() => navigate("/")}>Inicio</Button>
          <Button state="text" size="medium" onClick={() => navigate("/productos")}>Categoría</Button>
          <Button state="text" size="medium" onClick={() => navigate("/productos?oferta=Con%20oferta")}>Ofertas</Button>
          <Button state="text" size="medium" onClick={() => navigate("/productos?genero=Hombre")}>Hombre</Button>
          <Button state="text" size="medium" onClick={() => navigate("/productos?genero=Mujer")}>Mujer</Button>
        </div>
        <div className="flex items-center gap-4">
          <Button
            icon={FaSearch}
            onlyIcon
            state="enabled"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <div className="relative">
            <Button
              icon={FaShoppingCart}
              onlyIcon
              state="enabled"
              onClick={() => navigate("/carrito")}
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">
              {cartCount}
            </span>
          </div>
        </div>
      </nav>


      {/* 🔍 SEARCH (AHORA SIGUE AL NAVBAR) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-7xl px-4 mt-2"
          >
            <div className="bg-white shadow px-6 py-4 rounded-2xl flex items-center gap-3">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-full outline-none"
              />

              <Button size="medium" icon={FaArrowRight} iconPosition="right">
                Buscar
              </Button>
            </div>
          </motion.div>
        )}
        
      </AnimatePresence>

    </div>

    
  );
}