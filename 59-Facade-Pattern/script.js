import { drawSquare, drawSquareOutline, drawCircle } from './draw.js'

const canvas = document.createElement('canvas')
canvas.height = window.innerHeight - 20
canvas.width = window.innerWidth - 20
document.body.append(canvas)

const context = canvas.getContext('2d')

drawSquare(canvas, { x: 50, y: 50, size: 200, color: 'red' })

drawSquareOutline(canvas, { x: 300, y: 50, size: 200, color: 'blue', lineWidth: 20 })

drawCircle(canvas, { x: 650, y: 150, size: 100, color: 'green' })

document.addEventListener('keypress', e => {
  if(e.key === 'c') {
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  }
})
