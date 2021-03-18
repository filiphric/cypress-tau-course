/// <reference types="cypress" />

it('Stubbing response', () => {

  cy
    .intercept({
      method: 'GET',
      url: '/api/boards'
    }).as('boardList')

  cy
    .visit('/')

});