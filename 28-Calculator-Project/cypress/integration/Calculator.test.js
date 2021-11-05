describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it("correctly handles normal calculations", () => {
    cy.visit('/')
    cy.contains('4').click()
    cy.contains('.').click()
    cy.contains('1').click()
    cy.get('.primary-operand').should('have.text', '4.1')
    cy.contains('+').click()
    cy.get('.primary-operand').should('have.text', '0')
    cy.get('.secondary-operand').should('have.text', '4.1')
    cy.get('.history > [data-operation]').should('have.text', '+')
    cy.contains('6').click()
    cy.get('.primary-operand').should('have.text', '6')
    cy.contains('=').click()
    cy.get('.primary-operand').should('have.text', '10.1')
  })

  it('correctly handles all clear', () => {
    cy.contains('4').click()
    cy.contains('+').click()
    cy.contains('6').click()
    cy.contains('AC').click()
    cy.get('.primary-operand').should('have.text', '0')
    cy.get('.secondary-operand').should('have.text', '')
    cy.get('.history > [data-operation]').should('have.text', '')
  })

  it('correctly handles delete', () => {
    cy.contains('4').click()
    cy.contains('4').click()
    cy.contains('4').click()
    cy.contains('DEL').click()
    cy.get('.primary-operand').should('have.text', '0')
  })
})