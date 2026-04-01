import { PositionalAudio } from '@react-three/drei'
import React from 'react'

const Preloader = () => {
  return (
    <>
    <PositionalAudio
            distance={20}
          url={"/sfxs/pop.mp3"}
          autoplay={false}
          loop={false}
        />
        <PositionalAudio
          url={"/sfxs/trail.mp3"}
          autoplay={false}
          loop={false}
        />
    </>
  )
}

export default Preloader