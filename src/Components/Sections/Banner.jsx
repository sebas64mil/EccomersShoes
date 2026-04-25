import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
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
    renderer.setPixelRatio(window.devicePixelRatio);

    mountNode.appendChild(renderer.domElement);

    // 🔥 LUCES
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    // 📦 FBX
    const loader = new FBXLoader();
    let model = null;

    loader.load(
      "/src/assets/Models/vans-shoe/source/Shoe.fbx", 
      (fbx) => {
        model = fbx;

        // Ajustes importantes
        model.scale.set(2, 2, 2);
        model.position.set(0, -1, -3);
        model.rotation.x= Math.PI / 4;

        // Mejorar meshes
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(model);
      },
      undefined,
      (error) => {
        console.error("Error cargando FBX:", error);
      }
    );

    camera.position.z = 5;

    let animationId;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // 🔄 animación del modelo
      if (model) {
        model.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 🧹 CLEANUP
    return () => {
      cancelAnimationFrame(animationId);

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[300px] rounded-2xl overflow-hidden bg-gray-100 mt-6">
      
      {/* 🧊 Canvas */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* 📝 UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-950 drop-shadow-lg mb-2">
          Explora nuevos estilos
        </h2>

        <p className="text-indigo-50 text-sm md:text-base max-w-xl mb-4">
          Descubre nuestra nueva colección de zapatos diseñados para comodidad y estilo en cada paso.
        </p>

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