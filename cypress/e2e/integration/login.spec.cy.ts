describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
  });


  // Login com usuário incorreto e senha correta
  it('Deve exibir erro com usuário incorreto e senha correta', () => {
    cy.log('Validar mensagem para usuario incorreto');
    cy.get('#username').type('invalidUser');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  // Login com usuário correto e senha incorreta
  it('Deve exibir erro com usuário correto e senha incorreta', () => {
    cy.log('Validar mensagem para senha incorreto');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('invalidPass');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });

  // Login sem inserir nome de usuário e senha
  it('Deve exibir erro ao tentar login sem nome de usuário e senha', () => {
    cy.log('Validar mensagem campos vazios');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  // Login com espaços em branco no nome de usuário
  it('Deve exibir erro com espaços em branco no nome de usuário', () => {
    cy.log('Validar mensagem apenas espaco em branco nos campos');
    cy.get('#username').type('   ');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  // Verificar redirecionamento apos login bem-sucedido
  it('Deve redirecionar para a página correta apos login', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('h2').should('contain.text', 'Secure Area');
  });

  // Logout apos login bem-sucedido
  it('Deve permitir logout apos login com sucesso', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('.button').click();
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
    cy.url().should('include', '/login');
  });

  // Login com caracteres especiais no nome de usuário
  it('Deve exibir erro ao usar caracteres especiais no nome de usuário', () => {
    cy.get('#username').type('!@#$%^&*()');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  // Limite de tentativas de login falhas
  it('Deve falhar apos várias tentativas de login inválidas', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('invalidPass');
      cy.get('button[type="submit"]').click();
      cy.get('#flash').should('contain.text', 'Your password is invalid!');
    }
  });

  // Login com tecla Enter
  it('Deve fazer login ao pressionar Enter', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#password').type('{enter}');

    cy.url().should('include', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });
});
