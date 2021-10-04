import { createBoard, markTile, TILE_STATUSES } from './minesweeper.js'

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-couter]")

board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
    tile.element.addEventListener('click', () => {
      console.log('click')
    })
    tile.element.addEventListener('contextmenu', e => {
      e.preventDefault()
      console.log('contextmenu')
      markTile(tile)
      listMinesLeft()
    })
  })
})

boardElement.style.setProperty("--size", BOARD_SIZE)
minesLeftText.textContent = NUMBER_OF_MINES

function listMinesLeft() {
  const markedTilesCount = board.reduce((count, row) => {
    return count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length
  }, 0)

  minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount
}