import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Button from "../ElementsUi/Button";
import { FaArrowRight } from "react-icons/fa";
export default function Banner() {
  const mountRef = useRef(null);

useEffect(() => {
  const mountNode = mountRef.current;
  if (!mountNode) return;

  const width = mountNode.clientWidth;
  const height = 300;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    width / height,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(width, height);

  mountNode.appendChild(renderer.domElement);

  // Cubo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshStandardMaterial({ color: 0x2563eb });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Luces
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);

  const ambient = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambient);

  camera.position.z = 3;

  let animationId;

  const animate = () => {
    animationId = requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.007;

    renderer.render(scene, camera);
  };

  animate();

  // ✅ CLEANUP SEGURO
  return () => {
    cancelAnimationFrame(animationId);

    if (mountNode.contains(renderer.domElement)) {
      mountNode.removeChild(renderer.domElement);
    }

    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
}, []);

return (
  <div className="relative w-full max-w-7xl mx-auto h-[300px] rounded-2xl overflow-hidden bg-gray-100 mt-6">
    
    {/* 🧊 Canvas Three.js */}
    <div ref={mountRef} className="absolute inset-0" />

    {/* 🌑 Overlay oscuro (mejora visibilidad) */}
    <div className="absolute inset-0 bg-black/30 z-0" />

    {/* 📝 Contenido */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
      
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 drop-shadow-lg mb-2">
        Explora nuevos estilos
      </h2>

      {/* Descripción */}
      <p className="text-indigo-50 text-sm md:text-base max-w-xl mb-4">
        Descubre nuestra nueva colección de zapatos diseñados para comodidad y estilo en cada paso.
      </p>

      {/* Botón */}
      <Button 
        size="medium"
        state="enabled"
        icon={FaArrowRight}
        iconPosition="right"
      >
        Comprar ahora
      </Button>

    </div>
  </div>
);
}