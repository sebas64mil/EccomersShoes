# EccomersShoes

Proyecto de e-commerce de zapatos dirigido a jóvenes adultos (20 años en adelante).

## Tecnologías y librerías utilizadas

- **React**: Librería principal para la construcción de interfaces de usuario.
- **Tailwind CSS**: Utilidad para estilos rápidos y responsivos.
- **Three.js**: (Preparado para futuras visualizaciones 3D de productos).

## Componentes principales

### 1. Button

Botón reutilizable con múltiples variantes de tamaño, estado, icono y posición.

**Props:**
- `children`: Texto del botón.
- `size`: Tamaño (`large`, `medium`, `small`).
- `state`: Estado visual (`enabled`, `pressed`, `disabled`, `text`).
- `icon`: Componente de icono (ej: `FaBeer`).
- `iconPosition`: Posición del icono (`left`, `right`, `top`, `bottom`).
- `onlyIcon`: Solo muestra el icono (boolean).

**Ejemplos:**
```jsx
<Button size="large" state="enabled">Grande</Button>
<Button size="medium" state="text">Solo texto</Button>
<Button icon={FaBeer} onlyIcon state="enabled" />
<Button icon={FaBeer} onlyIcon state="text" />
<Button icon={FaBeer} iconPosition="top">Icono Arriba</Button>
<Button icon={FaBeer} iconPosition="bottom">Icono Abajo</Button>
```

### 2. Navbar

Barra de navegación superior con logo, botones de categorías y acciones (búsqueda y carrito).

**Uso:**
```jsx
import Navbar from "./Components/Sections/Navbar";

function App() {
	return (
		<>
			<Navbar />
			{/* ...resto de la app... */}
		</>
	);
}
```

**Características:**
- Logo con h1 ("Walkora").
- Botones de categorías (sin fondo, medianos).
- Botón de búsqueda (solo icono, con fondo).
- Botón de carrito con badge numérico.
- Diseño centrado, redondeado y con márgenes.

---
Para más detalles revisa los archivos de cada componente en `src/Components/ElementsUi/Button.jsx` y `src/Components/Sections/Navbar.jsx`.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
