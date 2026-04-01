import React, { useRef } from 'react'
import { VFXEmitter } from "lazy-vfx";
import { degToRad } from "three/src/math/MathUtils";
import { useFrame } from "@react-three/fiber";
import { PositionalAudio } from "@react-three/drei";
import { useEffect } from "react";

const Firework = ({ position, velocity, color, delay }) => {
    const ref = useRef();
    const age = useRef(0);
  
    useFrame((_, delta) => {
      if (ref.current) {
        ref.current.position.x += (velocity?.[0] || 0) * delta;
        ref.current.position.y +=
          (velocity?.[1] || 0) * delta + age.current * age.current * -9.0 * delta;
        ref.current.position.z += (velocity?.[2] || 0) * delta;
  
        age.current += delta;
      }
    });
  
    const audioRef = useRef()
  
    useEffect(()=>{
      if(audioRef.current){
          setTimeout(() => {
              audioRef.current?.play()
          }, delay * 1000);
      }
    },[])
  
    return (
      <group ref={ref} position={position}>
        <PositionalAudio
          distance={20}
          url={"/sfxs/pop.mp3"}
          autoplay={false}
          loop={false}
          ref={audioRef}
        />
        <VFXEmitter
          emitter="firework-particles"
          settings={{
            nbParticles: 5000,
            delay: delay,
            spawnMode: "burst",
            colorStart: color,
            particlesLifetime: [0.1, 2],
            size: [0.01, 0.4],
            startPositionMin: [-0.1, -0.1, -0.1],
            startPositionMax: [0.1, 0.1, 0.1],
            directionMin: [-1, -1, -1],
            directionMax: [1, 1, 1],
            startRotationMin: [degToRad(-90), 0, 0],
            startRotationMax: [degToRad(90), 0, 0],
            rotationSpeedMin: [0, 0, 0],
            rotationSpeedMax: [3, 3, 3],
            speed: [1, 12],
          }}
        />
        <PositionalAudio
          distance={20}
          url={"/sfxs/trail.mp3"}
          autoplay
          loop={false}
        />
        <VFXEmitter
          emitter="firework-particles"
          settings={{
            duration: delay,
            nbParticles: 100 * delay,
            delay: 0,
            loop: false,
            colorStart: ["white", "skyblue"],
            particlesLifetime: [0.1, 0.6],
            size: [0.01, 0.05],
            startPositionMin: [-0.02, 0, -0.02],
            startPositionMax: [0.02, 0, 0.02],
            startRotationMin: [0, 0, 0],
            startRotationMax: [0, 0, 0],
            rotationSpeedMin: [-12, -12, -12],
            rotationSpeedMax: [12, 12, 12],
            directionMin: [-1, -1, -1],
            directionMax: [1, 1, 1],
            speed: [0, 0.5],
          }}
        />
      </group>
    );
  };

export default Firework