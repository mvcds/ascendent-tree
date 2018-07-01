import React from 'react'

class Canvas extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasAlertedAlternative: false
    }

    this.draw = draw.bind(this)
  }

  componentDidMount () {
    const { canvas } = this.refs

    if (!canvas.getContext && !this.state.hasAlertedAlternative) {
      this.setState({ hasAlertedAlternative: true })

      return alert(this.props.alternative)
    }

    const context = canvas.getContext('2d')

    this.setState({ context })
  }

  render () {
    const { alternative, width, height, children } = this.props

    return (
      <canvas width={width} height={height} ref="canvas">
        {alternative}
        {this.state.context && React.Children.map(children, this.draw)}
      </canvas>
    )
  }
}

function draw (child) {
  return React.cloneElement(child, {
    context: this.state.context
  })
}

export default Canvas
