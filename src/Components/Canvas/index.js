import React from 'react'

class Canvas extends React.Component {
  componentDidMount () {
    const { canvas } = this.refs

    if (!canvas) return

    if (!canvas.getContext) return alert(this.props.alternative)

    const context = canvas.getContext('2d')

    context.fillStyle = 'rgb(200,0,0)'
    context.fillRect (10, 10, 55, 50)

    context.fillStyle = 'rgba(0, 0, 200, 0.5)'
    context.fillRect (30, 30, 55, 50)
  }

  render () {
    const { alternative, width, height } = this.props
    return (
      <canvas width={width} height={height} ref="canvas">
        {alternative}
      </canvas>
    )
  }
}

export default Canvas
