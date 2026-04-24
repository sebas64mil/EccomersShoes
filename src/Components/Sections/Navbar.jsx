import React, { useState } from "react";
import Button from "../ElementsUi/Button";
import {
  FaSearch,
  FaShoppingCart,
  FaArrowRight,
  FaBars,
  FaTimes
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">

      {/* NAVBAR */}
      <nav className="w-full max-w-7xl flex items-center justify-between py-4 px-6 bg-white shadow rounded-full mt-4 mx-4">

        {/* LOGO */}
        <h1
          className="text-2xl font-lemon cursor-pointer"
          onClick={() => go("/")}
        >
          Walkora
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-4">
          <Button state="text" onClick={() => go("/")}>Inicio</Button>
          <Button state="text" onClick={() => go("/productos")}>Categoría</Button>
          <Button state="text" onClick={() => go("/productos?oferta=Con%20oferta")}>Ofertas</Button>
          <Button state="text" onClick={() => go("/productos?genero=Hombre")}>Hombre</Button>
          <Button state="text" onClick={() => go("/productos?genero=Mujer")}>Mujer</Button>
        </div>

        {/* ICONOS DERECHA */}
        <div className="flex items-center gap-3">

          {/* SEARCH (DESKTOP) */}
<div className="hidden md:block">
  <Button
    onlyIcon
    icon={FaSearch}
    size="medium"
    onClick={() => setIsSearchOpen(!isSearchOpen)}
  />
</div>

          {/* CART (DESKTOP) */}
          <div className="hidden md:block relative">
            <Button
              onlyIcon
              icon={FaShoppingCart}
              size="medium"
              onClick={() => go("/carrito")}
            />

            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">
              {cartCount}
            </span>
          </div>

          {/* MENU MOBILE */}
          <Button
            onlyIcon
            icon={menuOpen ? FaTimes : FaBars}
            size="medium"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </nav>

      {/* 🔍 SEARCH DESKTOP */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25 }}
            className="hidden md:block w-full max-w-7xl px-4 mt-2"
          >
            <div className="bg-white shadow px-6 py-4 rounded-2xl flex items-center gap-3">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-full outline-none"
              />

              <Button
                state="enabled"
                icon={FaArrowRight}
                iconPosition="right"
                size="medium"
              >
                Buscar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 📱 MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-7xl bg-white shadow rounded-2xl mt-2 px-6 py-5 flex flex-col gap-4 md:hidden"
          >

            {/* LINKS */}
            <Button state="text" onClick={() => go("/")}>Inicio</Button>
            <Button state="text" onClick={() => go("/productos")}>Categoría</Button>
            <Button state="text" onClick={() => go("/productos?oferta=Con%20oferta")}>Ofertas</Button>
            <Button state="text" onClick={() => go("/productos?genero=Hombre")}>Hombre</Button>
            <Button state="text" onClick={() => go("/productos?genero=Mujer")}>Mujer</Button>

            {/* SEARCH MOBILE */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-full outline-none"
              />

              <Button
                state="enabled"
                icon={FaArrowRight}
                size="medium"
              />
            </div>

            {/* CART MOBILE */}
            <Button
              onClick={() => go("/carrito")}
              icon={FaShoppingCart}
              iconPosition="right"
            >
              Carrito ({cartCount})
            </Button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}