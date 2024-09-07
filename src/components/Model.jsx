import React from 'react'
import { useState,Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Earth from "../assets/Earth"
import { AmbientLight } from 'three'
const modeh={
  height:'100vh'
};
const Model = () => {
  return (
    <div>
      <Canvas style={{ height: '100%' }} >
        <ambientLight/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Earth scale={2.7}/>
        </Suspense>
      </Canvas>
      <p className='text-center font-medium'>Have a Visit</p>
    </div>
  )
}

export default Model