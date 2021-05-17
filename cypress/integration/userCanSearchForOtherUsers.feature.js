describe('Visitor can search other users', () => {
  describe('successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.github.com/users', {
        fixture: 'github.json',
      });
      cy.visit('/');
    });
  });

  it('is expected to displays the expected user info', () => {
    cy.visit('/');
    cy.get('[data-cy=input-field]').type('mojombo');
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=user-container]').should('have.length', 1);
  });
});
