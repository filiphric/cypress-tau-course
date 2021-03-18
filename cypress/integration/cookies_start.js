/// <reference types="cypress" />

describe('Cookies', () => {

  beforeEach(() => {

    cy
      .visit('/')

  })

  it.only('test #1', () => {

    cy
      .get('[data-cy="login-menu"]')
      .click();

    cy
      .get('[data-cy="login-email"]')
      .type('filip@example.com');

    cy
      .get('[data-cy="login-password"]')
      .type('Asdf.1234#');

    cy
      .get('[data-cy="login"]')
      .click();

    });

  it('test #2', () => {

  });

});