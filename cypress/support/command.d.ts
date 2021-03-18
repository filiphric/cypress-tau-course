// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {

    /**
     * Creates a new board via UI
     *
     * @example
     * cy
     *   .addBoard('board name')
     */
    addBoard()
  }
}