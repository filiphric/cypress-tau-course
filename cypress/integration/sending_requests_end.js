/// <reference types="cypress" />

beforeEach(() => {

  cy.request({
    method: 'POST',
    url: '/api/reset'
  })

});

it('Sending requests', () => {

  cy
    .visit('/')

});