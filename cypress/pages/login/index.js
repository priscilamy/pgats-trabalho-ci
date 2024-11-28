class Login {
  realizarLogin(usuario, senha) {
    cy.get("a[href$=login]").click();

    cy.get('[data-qa="login-email"]').type(usuario);
    cy.get('[data-qa="login-password"]').type(senha, { log: false });
    cy.get('[data-qa="login-button"]').click();
  }
}

export default new Login();
