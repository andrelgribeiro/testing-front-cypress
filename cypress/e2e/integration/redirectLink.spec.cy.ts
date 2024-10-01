describe('Redirect Link Test', () => {
  it('should redirect to another page', () => {
    cy.visit('/redirector');
    
    cy.get('#redirect').click();
    // Redirecionamento para pagina 200
    cy.log('Redirecionamento para pagina 200');
    cy.get('a[href="status_codes/200"]').click();
    cy.url().should('include', '200');
    cy.get('a[href="/status_codes"]').click();

    // Redirecionamento para pagina 301
    cy.log('Redirecionamento para pagina 301');
    cy.get('a[href="status_codes/301"]').click();
    cy.url().should('include', '301');
    cy.get('a[href="/status_codes"]').click();

    // Redirecionamento para pagina 404
    cy.log('Redirecionamento para pagina 404');
    cy.get('a[href="status_codes/404"]').click();
    cy.url().should('include', '404');
    cy.get('a[href="/status_codes"]').click();

    // Redirecionamento para pagina 500
    cy.log('Redirecionamento para pagina 500');
    cy.get('a[href="status_codes/500"]').click();
    cy.url().should('include', '500');
    cy.get('a[href="/status_codes"]').click();

  });
});