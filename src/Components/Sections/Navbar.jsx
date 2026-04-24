import React, { useState } from "react";
import Button from "../ElementsUi/Button";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="w-full flex flex-col items-center mt-6 mb-4">
      
      {/* NAVBAR */}
      <nav className="w-full max-w-7xl flex items-center justify-between py-4 px-8 bg-white shadow rounded-full mx-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-lemon">Walkora</h1>

        {/* Categorías */}
        <div className="flex gap-4">
          <Button state="text" size="medium">Categoría</Button>
          <Button state="text" size="medium">Ofertas</Button>
          <Button state="text" size="medium">Hombre</Button>
          <Button state="text" size="medium">Mujer</Button>
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-4">
          
          {/* Botón búsqueda */}
          <Button
            icon={FaSearch}
            onlyIcon
            state="enabled"
            aria-label="Buscar"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />

          {/* Carrito */}
          <div className="relative">
            <Button
              icon={FaShoppingCart}
              onlyIcon
              state="enabled"
              aria-label="Carrito"
            />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">
              2
            </span>
          </div>
        </div>
      </nav>

      {/* BUSCADOR ANIMADO */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full max-w-7xl mx-4 mt-2 mb-2 overflow-hidden"
          >
            <div className="bg-white shadow px-6 py-4 rounded-b-2xl flex items-center gap-3">

              {/* Input */}
              <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={`
                  flex-1 px-4 py-2 border outline-none transition-all duration-200
                  ${searchValue === ""
                    ? "rounded-full border-gray-300"
                    : "rounded-lg border-blue-400"}
                `}
              />

              {/* Botón buscar con icono a la derecha */}
              <Button 
                size="medium" 
                state="enabled"
                icon={FaArrowRight}
                iconPosition="right"
              >
                Buscar
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}