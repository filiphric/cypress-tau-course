/// <reference types="cypress" />

it('Installing plugins', () => {

  cy
    .visit('/');

    cy
    .eyesOpen({
      appName: 'Trello app',
      testName: 'Trying out Applitools plugin',
      browser: { width: 800, height: 600 },
    });

  cy
    .eyesCheckWindow('Board list');

  cy
    .eyesClose();


});