const FULL = 2 * Math.PI

function Circle () {
  const { x, y, radius, fill, context, start = 0, end = FULL } = this.props

  context.fillStyle = fill;
  context.beginPath()
  context.arc(x, y, radius , start, end)
  context.fill()
}

export default Circle
