describe('Repositories feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a search form', () => {
    cy.contains('h1', 'GitHub Explorer');

    cy.get('input')
      .should('have.attr', 'placeholder')
      .and('include', 'Enter search query and hit enter ...');
  });

  it('returns a search result after entering a search string', () => {
    cy.get('input')
      .type('Quarkus').should('have.value', 'Quarkus');
    cy.get('form')
      .submit();

    cy.get('.repo-list--item')
      .should('have.length', 4);
  });

  it('shows repository KPIs', () => {
    cy.get('input')
      .type('DGraph').should('have.value', 'DGraph');
    cy.get('form')
      .submit();

    cy.contains('Stars');
    cy.contains('Watchers');
    cy.contains('Forks');
  });

  it('shows repository details', () => {
    cy.get('input')
      .type('HAProxy').should('have.value', 'HAProxy');
    cy.get('form')
      .submit();

    cy.get('.is-clickable')
      .first()
      .click();

    cy.contains('SSH Clone URL:');
    cy.contains('HTTPS Clone URL:');
    cy.contains('Size:');
    cy.contains('MByte');
    cy.contains('Is Archived:');
    cy.contains('Is Fork:');
    cy.contains('License:');
    cy.contains('Created at:');
    cy.contains('Last update:');
    cy.contains('Last push:');
  });

  it('has paginated results', () => {
    cy.get('input')
      .type('Ruby on Rails').should('have.value', 'Ruby on Rails');
    cy.get('form')
      .submit();

    cy.scrollTo(0, 500)

    cy.get('li')
      .contains('2')
      .click();

    cy.get('li')
      .contains('3')
      .click();

    cy.get('li')
      .contains('4')
      .click();

    cy.get('li')
      .contains('5')
      .click();

    cy.get('.is-current')
      .contains('5');
  });
});
