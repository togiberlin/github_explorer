describe('Favorites feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the favorite feature and displays an empty list', () => {
    cy.contains('Bookmarks');
    cy.contains('You have no bookmarked repos yet!');
    cy.contains('Share via e-mail');
  });

  it('adds favorites to list and counts favorites correctly', () => {
    cy.get('input')
      .type('VueJS').should('have.value', 'VueJS');
    cy.get('form')
      .submit();

    cy.contains('Add to Favorites');

    cy.get('.tag')
      .first()
      .click();

    cy.get('.tag')
      .last()
      .click();

    cy.contains('Favorites selected:');
    cy.contains('2');

    cy.get('.fa-trash')
      .click();
  });

  it('removes favorites from the list', () => {
    cy.get('input')
      .type('ReactJS').should('have.value', 'ReactJS');
    cy.get('form')
      .submit();

    cy.get('.tag')
      .first()
      .click();

    cy.get('.fa-window-close')
      .click({ multiple: true });

    cy.contains('You have no bookmarked repos yet!');
  });

  it('removes all favorites from the list', () => {
    cy.get('input')
      .type('Angular').should('have.value', 'Angular');
    cy.get('form')
      .submit();

    cy.get('.tag')
      .first()
      .click();

    cy.get('.fa-trash')
      .click();

    cy.contains('You have no bookmarked repos yet!');
  });

  it('has a share button, which contains a mailto: link', () => {
    cy.get('input')
      .type('SvelteJS').should('have.value', 'SvelteJS');
    cy.get('form')
      .submit();

    cy.get('.tag')
      .first()
      .click();

    cy.get('button')
      .contains('Share via e-mail')
      .should('have.attr', 'onclick')
      .and('include', "location.href='mailto:?body=Hey");

    cy.get('.fa-trash')
      .click();
  });
});
