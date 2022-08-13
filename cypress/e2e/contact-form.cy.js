const hasError = ($el) => {
  const classNameString = Array.from($el[0].classList).join('');
  return classNameString.includes('error');
};

const hasNoError = ($el) => {
  const classNameString = Array.from($el[0].classList).join('');
  return !classNameString.includes('error');
};

describe('Contact form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test fields', () => {
    const character = 'g';
    const characters2 = 'gё';
    const characters4 = 'text';
    const characters5 = 'texta';
    const characters40 = 'charcharcharcharcharcharcharcharcharchar';

    cy.get('[data-test="form"]').scrollIntoView();

    // name field
    cy.get('[data-test="name"]').type(`${character} `);
    cy.get('[data-test="company"]').focus();
    cy.get('[data-test="name"]').should('satisfy', hasError);

    cy.get('[data-test="name"]').clear().type(characters2);
    cy.get('[data-test="name"]').should('satisfy', hasNoError);

    cy.get('[data-test="name"]').clear().type(characters40);
    cy.get('[data-test="name"]').should('satisfy', hasNoError);

    cy.get('[data-test="name"]').type('g');
    cy.get('[data-test="name"]').should('satisfy', hasError);

    // company field
    cy.get('[data-test="company"]').type(`${character} `);
    cy.get('[data-test="name"]').focus();
    cy.get('[data-test="company"]').should('satisfy', hasError);

    cy.get('[data-test="company"]').clear().type(characters2);
    cy.get('[data-test="company"]').should('satisfy', hasNoError);

    cy.get('[data-test="company"]').clear().type(characters40);
    cy.get('[data-test="company"]').should('satisfy', hasNoError);

    cy.get('[data-test="company"]').type('g');
    cy.get('[data-test="company"]').should('satisfy', hasError);

    // email field
    cy.get('[data-test="email"]').type(` ${character}`);
    cy.get('[data-test="name"]').focus();
    cy.get('[data-test="email"]').should('satisfy', hasError);

    cy.get('[data-test="email"]').clear().type('name@');
    cy.get('[data-test="email"]').should('satisfy', hasError);

    cy.get('[data-test="email"]').clear().type('name@.com');
    cy.get('[data-test="email"]').should('satisfy', hasError);

    cy.get('[data-test="email"]').clear().type('name@site.com');
    cy.get('[data-test="email"]').should('satisfy', hasNoError);

    // message field
    cy.get('[data-test="message"]').type(` ${characters4}`);
    cy.get('[data-test="name"]').focus();
    cy.get('[data-test="message"]').should('satisfy', hasError);

    cy.get('[data-test="message"]').clear().type(characters5);
    cy.get('[data-test="message"]').should('satisfy', hasNoError);
  });

  it.only('Send a message', () => {
    cy.get('[data-test="form"]').scrollIntoView();
    // get errors on empty fields
    cy.get('[data-test="button-submit"]').click();
    cy.get('[data-test="name"]').should('satisfy', hasError);
    cy.get('[data-test="email"]').should('satisfy', hasError);
    cy.get('[data-test="message"]').should('satisfy', hasError);
    cy.get('[data-test="company"]').should('satisfy', hasNoError);
    // add correct text to input
    cy.get('[data-test="name"]').type('John Doe');
    cy.get('[data-test="company"]').type("John's Company");
    cy.get('[data-test="email"]').type('johndoe@mail.com');
    cy.get('[data-test="message"]').type("Hi, it's a test message!");
    // send request
    cy.intercept('/message').as('sendMessage');
    cy.get('[data-test="button-submit"]').click();
    cy.wait('@sendMessage');
    // check result
    cy.get('[data-test="form-result"]').contains('successfully');
  });
});
