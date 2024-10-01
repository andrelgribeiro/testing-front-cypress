describe('File Upload Tests', () => {
  beforeEach(() => {
    cy.visit('/upload');
  });

  it('Deve fazer upload de um arquivo .txt', () => {
    // Leitura de um arquivo fisico
    const fileName = '../../test.txt';
    cy.writeFile(fileName, 'hello world');

    // Fazer upload do arquivo
    cy.get('#file-upload').attachFile(fileName);
    cy.get('#file-submit').click();

    // Validar o upload
    cy.get('#uploaded-files').should('contain.text', 'test.txt');
  });
});
