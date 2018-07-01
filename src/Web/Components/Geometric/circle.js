function Circle () {
  const { x, y, radius, fill, context } = this.props

  context.fillStyle = fill;
  context.beginPath()
  context.arc(x, y, radius , 0, 2 * Math.PI)
  context.fill()
}

export default Circle
