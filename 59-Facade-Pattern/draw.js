export function drawSquare(canvas, { x, y, size, color }) {
  const context =  canvas.getContext('2d')
  context.fillStyle = color
  context.fillRect(x, y, size, size)
}

export function drawSquareOutline(canvas, { x, y, size, color , lineWidth }) {
  const context =  canvas.getContext('2d')
  context.fillStyle = color
  context.lineWidth = lineWidth
  context.strokeRect(x, y, size, size)
}

export function drawCircle(canvas, { x, y, size, color }) {
  const context =  canvas.getContext('2d')
  context.fillStyle = color
  context.arc(x, y, size, 0, Math.PI * 2)
  context.fill()
}