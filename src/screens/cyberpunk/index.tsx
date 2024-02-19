import { Gltf, OrbitControls } from "@react-three/drei";

const CyberPunk = () => {
  return (
    <>
      <Gltf src="/cyberpunk/Scene_04.glb" scale={1} position={[0, 0, 0]} />
      <OrbitControls />
    </>
  );
};

export default CyberPunk;
