/// <reference types="cypress" />


describe('Cookies', () => {

  beforeEach(() => {

    Cypress.Cookies.preserveOnce('trello_token')

    cy
      .visit('/')

  })

  it('test #1', () => {

    cy
      .setCookie('trello_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGlwQGV4YW1wbGUuY29tIiwiaWF0IjoxNjE1OTg5MTkyLCJleHAiOjE2MTU5OTI3OTIsInN1YiI6IjIifQ.c3HqS_RRCJp4IPYvwbUkxWPwBx4VXJa_0ArzKq7qx_M')

    cy
      .reload()

  });

  it('test #2', () => {

  });

  it('test #3', () => {

  });

});