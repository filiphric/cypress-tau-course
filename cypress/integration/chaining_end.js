/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Chaining commands', () => {

  cy
    .contains('milk')

  cy
    .get('[data-cy=list]')
    .eq(1)
    .contains('milk')

});