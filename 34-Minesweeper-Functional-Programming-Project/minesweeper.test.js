import { createBoard, TILE_STATUSES } from './minesweeper.js'

describe("#createBoard", () => {
  test("it creates a valid board", () => {
    const boadrSize = 2
    const minePositions = [{ x: 0, y: 1}]
    const expectedBoard = [
      [
        { x: 0, y: 0, status: TILE_STATUSES.HIDDEN, mine: false },
        { x: 0, y: 1, status: TILE_STATUSES.HIDDEN, mine: true }
      ],
      [
        { x: 1, y: 0, status: TILE_STATUSES.HIDDEN, mine: false },
        { x: 1, y: 1, status: TILE_STATUSES.HIDDEN, mine: false }
      ],
    ]
    const board = createBoard(boadrSize, minePositions)
    expect(board).toEqual(expectedBoard)
  })
})
