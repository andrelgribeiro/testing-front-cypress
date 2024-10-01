describe('Dropdown Tests', () => {
  beforeEach(() => {
    cy.visit('/dropdown');
  });

  it('Deve selecionar a opção 1 no dropdown', () => {
    cy.log('Validar selecao de opcao');
    cy.get('#dropdown').select('Option 1').should('have.value', '1');
  });

  it('Deve selecionar a opção 2 no dropdown', () => {
    cy.log('Validar selecao de opcao');
    cy.get('#dropdown').select('Option 2').should('have.value', '2');
  });

  it('Deve verificar que a opção por padrão é vazia', () => {
    cy.log('Validar selecao nenhuma opcao');
    cy.get('#dropdown').should('have.value', null);
  });
});
