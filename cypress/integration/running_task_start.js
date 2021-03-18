/// <reference types="cypress" />

it('Running tast', () => {

  cy
    .request('POST', '/api/reset')

  cy
    .visit('/')

});