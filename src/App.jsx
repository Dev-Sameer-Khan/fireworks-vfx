import { Loader, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      <Leva hidden />
      <Loader />
      <UI />
      <Canvas shadows camera={{ position: [12, 8, 26], fov: 30 }}>
        <color attach="background" args={["#110511"]} />
        <Suspense>
          <Preloader/>
          <Experience />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
