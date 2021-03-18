/// <reference types="cypress" />

Cypress.Commands.add('take', {prevSubject: 'optional'}, (subject, input) => {

  if (subject) {

    cy
      .wrap(subject)
      .find(`[data-cy=${input}]`)

  } else {

    cy
      .get(`[data-cy=${input}]`)

  }

})

it('Custom commands', () => {

  cy
    .visit('/board/77787127477');

  cy
    .take('list')
    .eq(0)
    .take('task')

});