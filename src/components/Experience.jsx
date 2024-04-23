import React from "react";
import { Canvas } from "@react-three/fiber";
import {
    Environment,
    Lightformer,
    ContactShadows,
    OrbitControls,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { City } from "./City.jsx";

export default function Experience() {
    return (
        <Canvas
            gl={{ logarithmicDepthBuffer: true, antialias: false }}
            dpr={[1, 1.5]}
            camera={{ position: [0, 4, 15], fov: 25 }}
            className="canvas"
        >
            <City position={[0, 3, 12]} />
            {/* Render the Porsche component and pass the setLoading function */}
            <hemisphereLight intensity={0.5} />

            <EffectComposer disableNormalPass>
                <Bloom
                    luminanceThreshold={0.2}
                    mipmapBlur
                    luminanceSmoothing={0}
                    intensity={1}
                />
            </EffectComposer>
        </Canvas>
    );
}
