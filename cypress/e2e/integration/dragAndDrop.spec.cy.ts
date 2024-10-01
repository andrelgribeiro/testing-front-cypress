describe('Drag and Drop Additional Tests', () => {
  beforeEach(() => {
    cy.visit('/drag_and_drop');
  });

  it('Deve trocar os blocos A e B simulando eventos e validar os conteúdos', () => {
    const dataTransfer = new DataTransfer();

    // Simular eventos de usuario e validar a troca
    cy.log('Simular eventos de usuario e validar a troca');
    cy.get('#column-a').trigger('dragstart', { dataTransfer });
    cy.get('#column-b').trigger('drop', { dataTransfer });
    cy.get('#column-a').trigger('dragend');
    
    // Validar a troca
    cy.log('Validar a troca');    
    cy.get('#column-a').should('contain.text', 'B');
    cy.get('#column-b').should('contain.text', 'A');
  });

  it('Deve verificar que o bloco A está à esquerda inicialmente', () => {
    cy.log('Validacao de posicao inicial');
    cy.get('#column-a').should('contain.text', 'A');
    cy.get('#column-b').should('contain.text', 'B');
  });

  it('Deve realizar drag and drop repetidamente', () => {
    const dataTransfer = new DataTransfer();

    // Primeira troca
    cy.log('Primeira troca');
    cy.get('#column-a').trigger('dragstart', { dataTransfer });
    cy.get('#column-b').trigger('drop', { dataTransfer });
    cy.get('#column-a').trigger('dragend');

    // Segunda troca (voltar ao estado original)
    cy.log('Segunda troca');
    cy.get('#column-b').trigger('dragstart', { dataTransfer });
    cy.get('#column-a').trigger('drop', { dataTransfer });
    cy.get('#column-b').trigger('dragend');

    // Validar que os blocos voltaram às posições originais
    cy.log('Validar que voltaram ao inicial');
    cy.get('#column-a').should('contain.text', 'A');
    cy.get('#column-b').should('contain.text', 'B');
  });

});
