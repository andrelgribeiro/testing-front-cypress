describe('Checkboxes Tests', () => {
  beforeEach(() => {
    cy.visit('/checkboxes');
  });

  it('Deve marcar ambos os checkboxes', () => {
    cy.get('input[type="checkbox"]').each(($el) => {
      cy.log('Marcar os dois checkbox e validar se estão marcados');
      cy.wrap($el).check().should('be.checked');
    });
  });

  it('Deve desmarcar ambos os checkboxes', () => {
    cy.get('input[type="checkbox"]').each(($el) => {
      cy.log('Desmarcar os dois checkbox e validar se não estão marcados');
      cy.wrap($el).uncheck().should('not.be.checked');
    });
  });

  it('Deve marcar apenas o primeiro checkbox', () => {
    // Garantir que os checkboxs estejam desmarcados
    cy.get('input[type="checkbox"]').each(($el) => {
      cy.log('Garantir que os checkboxs estejam desmarcados');
      cy.wrap($el).uncheck({ force: false });
    });

    cy.log('Marcar apenas o primeiro e verificar se o segundo não é marcado junto');
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    cy.get('input[type="checkbox"]').last().should('not.be.checked');
  });
});
