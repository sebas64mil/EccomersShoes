import React from "react";

export default function CategoryFilter({
  genero,
  tipo,
  onGeneroChange,
  onTipoChange,
}) {
  return (
    <div className="w-full bg-white rounded-xl shadow p-4 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="genero-filter">
            Genero
          </label>
          <select
            id="genero-filter"
            value={genero}
            onChange={(e) => onGeneroChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          >
            <option value="Todos">Todos</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="tipo-filter">
            Tipo
          </label>
          <select
            id="tipo-filter"
            value={tipo}
            onChange={(e) => onTipoChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-blue-500"
          >
            <option value="Todos">Todos</option>
            <option value="Deportivos">Deportivos</option>
            <option value="Formales">Formales</option>
            <option value="Verano">Verano</option>
            <option value="Trekking">Trekking</option>
          </select>
        </div>
      </div>
    </div>
  );
}
