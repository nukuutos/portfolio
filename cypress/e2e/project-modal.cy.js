describe('Beaurel modal', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Desktop, open & close modal', () => {
    cy.get('[data-test="open-beaurel-project"]').click();
    cy.get('[data-test="beaurel-project"]').should('be.visible');
    cy.get('[data-test="cross-close-modal"]').click();
    cy.get('[data-test="beaurel-project"]').should('not.exist');
  });

  it('Phone, open & close modal', () => {
    cy.viewport(330, 500);

    cy.get('[data-test="open-beaurel-project"]').click();
    cy.get('[data-test="beaurel-project"]').should('be.visible');
    cy.get('[data-test="arrow-close-modal"]').click();
    cy.get('[data-test="beaurel-project"]').should('not.exist');
  });
});
