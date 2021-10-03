// Logic

export function createBoard(boradSize, numberOfMines) {
  const board = []
  for (let x = 0; x < boradSize; x++ ) {
    const row = []
    for (let y = 0; y < boradSize; y++ ) { 
      const tile = {
        x,
        y
      }

      row.push(tile)
    }
    board.push(row)
  }
  return board
}