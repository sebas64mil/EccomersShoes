import React from "react";

export default function Footer() {
  return (
    <footer className="w-full mt-10 bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center text-center gap-2">
        
        {/* Título */}
        <h5 className="text-base font-semibold text-gray-800">
          Walkora
        </h5>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tu Tienda. Todos los derechos reservados.
        </p>

      </div>

    </footer>
  );
}