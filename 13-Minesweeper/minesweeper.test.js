import { createBoard, TILE_STATUSES } from "./minesweeper"

describe("#createBoard", () => {
  test("it creates a valid board", () => {
    const boadrSize = 2
    const minePositions = [{ x: 0, y: 1}]
    const expectedBoard = [
      [
        { x: 0, y: 0, status: TILE_STATUSES.HIDDEN, element: '', mine: false },
        { x: 0, y: 1, status: TILE_STATUSES.HIDDEN, element: '', mine: false }
      ],
      [
        { x: 1, y: 0, status: TILE_STATUSES.HIDDEN, element: '', mine: false },
        { x: 1, y: 1, status: TILE_STATUSES.HIDDEN, element: '', mine: false }
      ],
    ]
    const board = createBoard(boadrSize, minePositions)
    expect(board).toEqual(expectedBoard)
  })
})
