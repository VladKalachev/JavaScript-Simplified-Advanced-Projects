// Logic

export const TILE_STATUSES = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked" 
};

export function createBoard(boradSize, numberOfMines) {
  const board = []
  const minePositions = getMinePositions(boradSize, numberOfMines)

  for (let x = 0; x < boradSize; x++ ) {
    const row = []
    for (let y = 0; y < boradSize; y++ ) { 
      const element = document.createElement("div")
      element.dataset.status = TILE_STATUSES.HIDDEN

      const tile = {
        element,
        x,
        y,
        mine: minePositions.some(positionMatch.bind(null, { x, y })),
        get status() {
          return element.dataset.status
        },
        set status(value) {
          this.element.dataset.status = value
        },
      }

      row.push(tile)
    }
    board.push(row)
  }
  return board
}

export function markTile(tile) {
  if(tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.MARKED) {
    return 
  }

  if (tile.status === TILE_STATUSES.MARKED) {
    tile.status = TILE_STATUSES.HIDDEN
  } else {
    tile.status = TILE_STATUSES.MARKED
  }
}

function getMinePositions(boradSize, numberOfMines) {
  const positions = []

  while(positions.length < numberOfMines) {
    const position = {
      x: randomNumber(boradSize),
      y: randomNumber(boradSize),
    }
    if (!positions.some(positionMatch.bind(null, position))) {
      positions.push(position)
    }
  }

  return positions;
}

function positionMatch(a, b) {
  return a.x === b.x && a.y === b.y
}

function randomNumber(size) {
  return Math.floor(Math.random() * size)
}