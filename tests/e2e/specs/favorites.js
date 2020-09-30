describe('Favorites feature', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loads the favorite feature and displays an empty list', () => {
    cy.contains('You have no bookmarked repos yet!');
  });

  it('adds favorites to list', () => {

  });

  it('removes favorites from the list', () => {

  });

  it('removes all favorites from the list', () => {

  });

  it('it counts, how many favorites were added', () => {

  });

  it('has a share button, which contains a mailto: link', () => {

  });
});
