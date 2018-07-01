import React from 'react'

import './App.css'

import Canvas from './Components/Canvas'
import Geometric from './Components/Geometric'

function App () {
  const { innerWidth: width, innerHeight: height } = window

  return (
    <Canvas alternative="Your browser does not support canvas" width={width} height={height}>
      <Geometric.Circle x={35} y={35} radius={25} fill="rgb(200,0,0)" />
      <Geometric.Circle x={55} y={55} radius={25} fill="rgba(0, 0, 200, 0.5)" />
    </Canvas>
  )
}

export default App
