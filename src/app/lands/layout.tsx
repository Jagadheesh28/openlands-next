"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const LandsPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={2}  />
        <OrbitControls />
        {children}
      </Canvas>
    </div>
  );
};

export default LandsPageLayout;
