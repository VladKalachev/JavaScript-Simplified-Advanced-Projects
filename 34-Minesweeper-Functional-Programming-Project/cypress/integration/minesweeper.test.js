import { TILE_STATUSES } from "../../minesweeper"

describe('user left clicks on tile', () => {
  describe('when the tule is not a mine', () => {
    it('reveals itself and displays the number if mines', () => {
      cy.visitBoard([
        [
          { x: 0, y: 0, status: TILE_STATUSES.MARKED, mine: true },
          { x: 0, y: 1, status: TILE_STATUSES.HIDDEN, mine: true },
        ],
        [
          { x: 1, y: 0, status: TILE_STATUSES.HIDDEN, mine: true },
          { x: 1, y: 1, status: TILE_STATUSES.HIDDEN, mine: true },
        ]
      ])

      cy.get('[data-x="0"][data-y="1"]').click()
      cy.get('[data-x="0"][data-y="1"]').should("have.text", "1")
    })
  })
})
