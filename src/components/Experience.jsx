import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { CyberCity } from "./CyberCity.jsx";
import { VRButton, XR } from "@react-three/xr";

export default function Experience() {
    return (
        <>
            <VRButton />
            <Canvas
                gl={{ logarithmicDepthBuffer: true, antialias: false }}
                camera={{
                    position: [0, 0, 0.0001],
                }}
                className="canvas"
                shadows
                style={{ backgroundColor: "black" }}
            >
                <XR>
                    {/* All your regular react-three-fiber elements go here */}
                    <CyberCity
                        position={[10, -2, 6]}
                        rotation-y={1.2}
                        castShadow
                        receiveShadow
                    />
                    {/* Render the Porsche component and pass the setLoading function */}
                    <ambientLight intensity={0.5} color="purple" />
                    <Environment resolution={512}>
                        {/* Ceiling */}

                        {/* Key */}
                        <Lightformer
                            form="ring"
                            color="purple"
                            intensity={5}
                            scale={2}
                            position={[10, 5, 10]}
                            onUpdate={(self) => self.lookAt(0, 0, 0)}
                            castShadow
                            receiveShadow
                        />
                        <Lightformer
                            form="ring"
                            color="blue"
                            intensity={5}
                            scale={2}
                            position={[-10, 5, 10]}
                            onUpdate={(self) => self.lookAt(0, 0, 0)}
                            castShadow
                            receiveShadow
                        />
                        <Lightformer
                            form="ring"
                            color="blue"
                            intensity={5}
                            scale={2}
                            position={[-10, 5, -10]}
                            onUpdate={(self) => self.lookAt(0, 0, 0)}
                            castShadow
                            receiveShadow
                        />
                        <Lightformer
                            form="ring"
                            color="blue"
                            intensity={4}
                            scale={2}
                            position={[-30, 5, -10]}
                            onUpdate={(self) => self.lookAt(0, 0, 0)}
                        />
                        <Lightformer
                            form="ring"
                            color="yellow"
                            intensity={1}
                            scale={2}
                            position={[-20, 5, -10]}
                            onUpdate={(self) => self.lookAt(0, 0, 0)}
                        />
                        <Lightformer
                            form="ring"
                            color="yellow"
                            intensity={3}
                            scale={1}
                            position={[-10, 2, -20]}
                            onUpdate={(self) => self.lookAt(0, 0, 0)}
                        />
                    </Environment>
                </XR>
            </Canvas>
        </>
    );
}
