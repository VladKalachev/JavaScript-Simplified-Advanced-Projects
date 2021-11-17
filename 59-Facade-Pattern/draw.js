export function drawSquare(canvas, { x, y, size, color }) {
  const context =  canvas.getContext('2d')
  context.fillStyle = color
  context.fillRect(x, y, size, size)
}