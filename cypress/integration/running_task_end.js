/// <reference types="cypress" />

it('Running task', () => {

  cy
    .task('setupDb', {
      boards: [{
        name: 'board created with .task()',
        id: 1,
        starred: false,
        user: 0
      }],
      lists: [],
      tasks: [],
      users: []
    })

  cy
    .visit('/')

});