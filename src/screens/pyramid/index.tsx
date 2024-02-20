import { Gltf } from "@react-three/drei";

const Pyramid = () => {
  return <>
  <Gltf src="/pyramid/Pyramids.glb" scale={1} position={[0, 0, 0]} />
  </>;
};

export default Pyramid;
