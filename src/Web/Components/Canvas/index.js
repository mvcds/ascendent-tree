import React from 'react'

class Canvas extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasAlertedAlternative: false
    }
  }

  componentDidMount () {
    const { canvas } = this.refs

    if (!canvas.getContext && !this.state.hasAlertedAlternative) {
      this.setState({ hasAlertedAlternative: true })

      return alert(this.props.alternative)
    }

    const context = canvas.getContext('2d')

    if (!context) return

    context.fillStyle = 'rgb(200,0,0)'
    context.beginPath()
    context.arc(35, 35, 25 , 0, 2 * Math.PI)
    context.fill()

    context.fillStyle = 'rgba(0, 0, 200, 0.5)'
    context.beginPath()
    context.arc(55, 55, 25 , 0, 2 * Math.PI)
    context.fill()
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
