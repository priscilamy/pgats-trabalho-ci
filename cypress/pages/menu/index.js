class Menu {
  //Menu TopBar
  acessarProdutos() {
    cy.contains(`Products`).click();
  }

  acessarCadastroLogin() {
    cy.contains("Signup").click();
  }

  acessarEntreEmContato() {
    cy.contains(`Contact us`).click();
  }

  //Menu BottomBar
  realizarInscricaoEmail(email) {
    cy.get("input#susbscribe_email").scrollIntoView().type(email);

    cy.get("button#subscribe").click();
  }

  // Menu logado
  acessarDeletarConta() {
    cy.contains(`Delete Account`).click();
  }

  acessarSairConta() {
    cy.contains("Logout").click();
  }

  // Botões gerais
  botaoClicarContinuar() {
    cy.get('[data-qa="continue-button"]').click();
  }
}

export default new Menu();
