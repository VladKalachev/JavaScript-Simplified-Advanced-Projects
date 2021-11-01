import { 
  createBoard, 
  markTile, 
  TILE_STATUSES, 
  revealTile, 
  checkWin, 
  checkLose
} from './minesweeper.js'

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10

let board = createBoard(BOARD_SIZE, NUMBER_OF_MINES)
const boardElement = document.querySelector(".board")
const minesLeftText = document.querySelector("[data-mine-couter]")
const messageText = document.querySelector(".subtext")

function render() {
  boardElement.innerHTML = ''
  chackGameEnd()

  getTitleElements().forEach(element => {
    boardElement.append(element);
  })

  listMinesLeft()
}

function getTitleElements() {
  return board.flatMap(row => {
    return row.map(titleToElement)
  })
}

function titleToElement(tile) {
  const element = document.createElement("div")
  element.dataset.status = tile.status
  element.dataset.x = tile.x
  element.dataset.y = tile.y
  element.textContent = tile.adjacentMinesCount || ''
  return element
}

boardElement.addEventListener('click', e => {
  if(e.target.matches('[data-status]')) return
  revealTile(
    board,
    board[parseInt(e.target.dataset.x)][parseInt(e.target.dataset.y)]
  )
  render()
})

boardElement.addEventListener('contextmenu', e => {
  if(e.target.matches('[data-status]')) return
  e.preventDefault()
  markTile(
    board,
    board[parseInt(e.target.dataset.x)][parseInt(e.target.dataset.y)]
  )
  render()
})

boardElement.style.setProperty("--size", BOARD_SIZE)
render()
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