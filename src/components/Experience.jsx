import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, CameraControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { CyberCity } from "./CyberCity.jsx";
import {
    VRButton,
    ARButton,
    XR,
    Controllers,
    Hands,
    useXR,
} from "@react-three/xr";

export default function Experience() {
    return (
        <>
            <VRButton
                /* The type of `XRSession` to create */ mode={"VR"}
                sessionInit={{
                    optionalFeatures: [
                        "local-floor",
                        "bounded-floor",
                        "hand-tracking",
                        "layers",
                    ],
                }}
                /** Whether this button should only enter an `XRSession`. Default is `false` */
                enterOnly={false}
                /** Whether this button should only exit an `XRSession`. Default is `false` */
                exitOnly={false}
                onError={(error) => console.error(error)}
            />
            <Canvas
                gl={{ logarithmicDepthBuffer: true, antialias: false }}
                camera={{
                    position: [0, 0, 0.0001],
                }}
                className="canvas"
                shadows
                style={{ backgroundColor: "black" }}
            >
                <XR
                    foveation={1} // Set to maximum foveation to improve performance
                    frameRate={90} // Set an optimal framerate; adjust based on device testing
                    referenceSpace="local-floor"
                >
                    {/* All your regular react-three-fiber elements go here */}
                    <CyberCity
                        position={[10, -2, 6]}
                        rotation-y={1.2}
                        castShadow
                        receiveShadow
                    />
                    {/* Render the Porsche component and pass the setLoading function */}
                    <ambientLight intensity={0.1} color="purple" />
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

                    <EffectComposer disableNormalPass>
                        <Bloom
                            luminanceThreshold={0.2}
                            mipmapBlur
                            luminanceSmoothing={0}
                            intensity={0.5}
                        />
                    </EffectComposer>

                    <CameraControls
                        minZoom={1}
                        maxZoom={3}
                        polarRotateSpeed={-0.5}
                        azimuthRotateSpeed={-0.5}
                        mouseButtons={{
                            left: 1,
                            wheel: 16,
                        }}
                        touches={{
                            one: 32,
                            two: 512,
                        }}
                    />
                </XR>
            </Canvas>
        </>
    );
}
