/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Chaining commands', () => {

  cy
    .get('[data-cy="task"]')
    .should('be.visible')

});