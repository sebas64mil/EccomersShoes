import React from "react";
import Button from "../ElementsUi/Button";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center mt-6 mb-4">
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
          <Button icon={FaSearch} onlyIcon state="enabled" aria-label="Buscar" />
          <div className="relative">
            <Button icon={FaShoppingCart} onlyIcon state="enabled" aria-label="Carrito" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 font-bold">2</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
