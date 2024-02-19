"use client";
import { Canvas } from "@react-three/fiber";

const LandsPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight />
        {children}
      </Canvas>
    </div>
  );
};

export default LandsPageLayout;
