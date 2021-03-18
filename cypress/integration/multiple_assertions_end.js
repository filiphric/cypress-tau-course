/// <reference types="cypress" />

beforeEach(() => {

  cy
    .visit('/board/2305140181')
})

it('Multiple assertions', () => {

  cy
    .get('[data-cy=task]')
    .should( item => {
      if (item.length !== 3) {
        throw new Error('Not enough elements!')
      }
      expect(item[0]).to.contain.text('bread')
      expect(item[1]).to.contain.text('milk')
    })

})