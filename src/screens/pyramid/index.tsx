import { Gltf, OrbitControls } from "@react-three/drei";

const Pyramid = () => {
  return <>
  <Gltf src="/pyramid/Pyramids.glb" scale={1} position={[0, -4, 0]} />
  <OrbitControls />
  </>;
};

export default Pyramid;
