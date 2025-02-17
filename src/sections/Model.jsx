/* eslint-disable react/no-unknown-property */
import { useState, Suspense } from "react";
// import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Card1 from "../models/Card1";
import { OrbitControls } from "@react-three/drei";
import { Card2 } from "../models/Card2";

// import { View } from "@react-three/drei";
// import { models, sizes } from "../constants";
// import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [showCard1, setShowCard1] = useState(true);
  const [showCard2, setShowCard2] = useState(false);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, 0, 0];
    } else {
      screenScale = [2, 2, 2];
      screenPosition = [0, 0, 0];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative bg-[#0A0427]">
      {/* Centered Heading horizontally */}
      <div className="flex justify-center items-center z-10 bg-[#0A0427] mt-24">
        {" "}
        {/* Aligned h3 and image on the same line */}
        <h3 className="text-5xl font-bold text-white px-4 mt-16">
          Choose your favorite <span className="text-[#8C3BFF]"> COLOR</span>
        </h3>
        {/* <img src="/images/secure.svg" className="w-16 h-16 ml-2 mt-16" />{" "} */}
        {/* Added margin-left for spacing */}
      </div>

      {/* Card Model */}
      <Canvas
        className="w-full h-[25vh] bg-transparent cursor-grab  mb-100" // Added margin-bottom to bring buttons closer to the model
        camera={{ position: [0, 0, 10], near: 0.1, far: 1000 }}
      >
        <Suspense fallback={null}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          {showCard1 && (
            <Card1
              position={islandPosition}
              rotation={[0, 0, 0]}
              scale={islandScale}
            />
          )}
          {showCard2 && (
            <Card2
              position={islandPosition}
              rotation={[0, 0, 0]}
              scale={islandScale}
            />
          )}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>

      {/* Buttons Below the Card Model */}
      <div className="absolute bottom-36 left-1/2 transform -translate-x-1/2 z-10 flex gap-4">
        {" "}
        {/* Reduced bottom spacing to bring buttons closer */}
        <button
          onClick={() => {
            setShowCard1(true);
            setShowCard2(false);
          }}
          className="bg-pink-500 text-white p-4 rounded-full"
        ></button>
        <button
          onClick={() => {
            setShowCard1(false);
            setShowCard2(true);
          }}
          className="bg-cyan-800 text-white p-4 rounded-full"
        ></button>
      </div>
    </section>
  );
};

export default Model;
