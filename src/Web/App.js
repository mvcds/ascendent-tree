import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Canvas from './Components/Canvas'

function App () {
  const { innerWidth: width, innerHeight: height } = window

  return (
    <Canvas alternative="Your browser does not support canvas" width={width} height={height} />
  )
}

export default App