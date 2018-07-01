import React from 'react'

import Geometric from '../Geometric'

function Subject (props) {
  const { alpha = 0, beta = 1, gama = 2 } = props

  return (
    <React.Fragment>
      <Geometric.Circle {...props} start={alpha * Math.PI} end={beta * Math.PI} fill="rgb(200,0,0)" />
      <Geometric.Circle {...props} start={beta * Math.PI} end={gama * Math.PI} fill="rgb(0,0,200)" />
    </React.Fragment>
  )
}

export default Subject
