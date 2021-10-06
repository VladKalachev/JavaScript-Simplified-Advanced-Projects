import { createBoard, markTile, TILE_STATUSES, revealTile, checkWin, checkLose } from './minesweeper.js'

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10

const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-couter]")
const messageText = document.querySelector(".subtext")

board.forEach(row => {
  row.forEach(tile => {
    boardElement.append(tile.element)
    tile.element.addEventListener('click', () => {
      revealTile(board, tile)
      chackGameEnd()
    })
    tile.element.addEventListener('contextmenu', e => {
      e.preventDefault()
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

function chackGameEnd() {
  const win = checkWin(board)
  const lose = checkLose(board)

  if (win || lose) {
    boardElement.addEventListener('click', stopProps, { capture: true })
    boardElement.addEventListener('contextmenu', stopProps, { capture: true })
  }

  if (win) {
    messageText.textContent = 'You Win'
  }
  if (lose) {
    messageText.textContent = 'You Lose'
    board.forEach(row => {
      row.forEach(tile => {
        if (tile.status === TILE_STATUSES.MARKED) markTile(tile)
        if (tile.mine) revealTile(board, tile)
      })
    })
  }
}

function stopProps(e) {
  e.stopImmediatePropagation()
} 