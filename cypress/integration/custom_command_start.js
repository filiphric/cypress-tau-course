/// <reference types="cypress" />

beforeEach(() => {
  cy.request('POST', '/api/reset')
})

it('Custom commands', () => {

  cy
    .visit('/');

  cy
    .get('[data-cy="create-board"]')
    .click();

  cy
    .get('[data-cy=new-board-input]')
    .type('new board{enter}');

});