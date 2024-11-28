class Assercao {
  validarExibicaoAllProducts() {
    cy.url().should("contain", "products");
    cy.get(".title").should("be.visible").and("contain", "All Products");
  }

  validarExibicaoMensagem(mensagem) {
    cy.contains(mensagem).should("be.visible");
  }

  validarCadastroUsuarioComSucesso() {
    cy.get('[data-qa="account-created"]').should("be.visible");
  }

  validarExibicaoNomeLogado() {
    cy.get("i.fa-user").parent().should("contain", Cypress.env("signUpName"));
  }

  validarLoginRealizadoComSucesso() {
    cy.get("i.fa-user").parent().should("contain", "LadyBug");
  }

  validarLogoutRealizadoComSucesso() {
    cy.url().should("contain", "login");
  }

  validarExibicaoTelaEntreEmContato() {
    cy.get(`.contact-form h2`)
      .should("be.visible")
      .and("have.text", "Get In Touch");
  }

  validarExibicaoDetalhesDoProduto() {
    cy.get(".product-information > h2").should("be.visible");
    cy.get(".product-information p").should("be.visible").and("have.length", 4);
    cy.get(".product-information span span").should("be.visible");
  }

  validarExibicaoBuscaProdutos() {
    cy.get(".title").should("be.visible").and("contain", "Searched Products");

    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1);
  }

  validarExibicaoDetalhesEnderecoRevisaoCompra() {
    cy.get(".heading").first().contains("Address Details");
    cy.get(".heading").last().contains("Review Your Order");
  }
}

export default new Assercao();
