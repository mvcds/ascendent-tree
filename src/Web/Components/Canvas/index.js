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
    const { context } = this.state

    return (
      <canvas width={width} height={height} ref="canvas">
        {alternative}
        {context &&  <Context context={context} children={children} draw={this.draw} />}
      </canvas>
    )
  }
}

function Context ({ children, context, draw }) {
  context.clearRect(0, 0, context.width, context.height)

  return React.Children.map(children, draw)
}

function draw (child) {
  return React.cloneElement(child, {
    context: this.state.context
  })
}

export default Canvas
