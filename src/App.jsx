import React from "react";

import Button from "./Components/ElementsUi/Button";
import Navbar from "./Components/Sections/Navbar";
import { FaBeer, FaArrowRight, FaArrowLeft } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "column", gap: "1em", padding: 32 }}>
        <Button size="large" state="enabled">Grande</Button>
        <Button size="medium" state="pressed">Mediano</Button>
        <Button size="small" state="disabled">Pequeño</Button>
        <Button size="large" icon={FaArrowLeft} iconPosition="left">Icono Izquierda</Button>
        <Button size="large" icon={FaArrowRight} iconPosition="right">Icono Derecha</Button>
        <Button size="medium" icon={FaBeer} onlyIcon={true} aria-label="Solo icono" />
        <Button size="medium">Solo texto</Button>
        <Button icon={FaBeer} onlyIcon state="text" />
        <Button state="text" iconPosition="left">Botón tipo texto</Button>
        <Button icon={FaBeer} iconPosition="top">Icono Arriba</Button>
        <Button icon={FaBeer} iconPosition="bottom">Icono Abajo</Button>
      </div>
    </>
  );
}

export default App;
