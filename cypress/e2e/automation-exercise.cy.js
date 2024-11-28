/// <reference types="cypress" />

import menu from "../pages/menu";
import cadastro from "../pages/cadastro";
import login from "../pages/login";
import contato from "../pages/contato";
import produto from "../pages/produto";
import assercao from "../pages/assercao";

describe("Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/");
  });

  it("Test Case 1: Cadastrar um usuário", () => {
    menu.acessarCadastroLogin();
    cadastro.preencherFormulario();

    // Validação de url e exibição de sucesso
    assercao.validarCadastroUsuarioComSucesso();
    menu.botaoClicarContinuar();
    assercao.validarExibicaoNomeLogado();
  });

  it("Test Case 2: Realizar login com dados válidos", () => {
    menu.acessarCadastroLogin();
    login.realizarLogin("ladybug@teste.com", "12345");

    // validação de login realizado
    assercao.validarLoginRealizadoComSucesso();
  });

  it("Test Case 3: Realizar login com dados inválidos", () => {
    menu.acessarCadastroLogin();
    login.realizarLogin("login_invalido@teste.com", "invalido");

    // validação de dados incorretos
    assercao.validarExibicaoMensagem("Your email or password is incorrect!");
  });

  it("Test Case 4: Logout user", () => {
    menu.acessarCadastroLogin();
    login.realizarLogin("ladybug@teste.com", "12345");
    menu.acessarSairConta();

    // validação de logout realizado
    assercao.validarLogoutRealizadoComSucesso();
    assercao.validarExibicaoMensagem("Login to your account");
  });

  it("Test Case 5: Registrar usuário com email existente", () => {
    menu.acessarCadastroLogin();

    // informar dados de login já cadastrado
    cadastro.preencherNomeEmailCadastro("LadyBug", "ladybug@teste.com");

    // validação de email já registrado no site
    assercao.validarExibicaoMensagem("Email Address already exist!");
  });

  it("Test Case 6: Formulário de contato", () => {
    menu.acessarEntreEmContato();
    // validação de exibição da tela contact us
    assercao.validarExibicaoTelaEntreEmContato();

    contato.preencherFormularioContato(
      "LadyBug",
      "ladybug@teste.com",
      "mensagem para entrar em contato",
    );

    // validação de envio de formulário com sucesso
    assercao.validarExibicaoMensagem(
      "Success! Your details have been submitted successfully.",
    );
  });

  it("Test Case 8: Ver todos os produtos e detalhes do produto", () => {
    menu.acessarProdutos();
    // validar acesso à tela de 'All Products'
    assercao.validarExibicaoAllProducts();

    // validar se há produto visível e selecionar o produto
    produto.selecionarPrimeiroProdutoVisivel();

    // validar detalhes do produto
    assercao.validarExibicaoDetalhesDoProduto();
  });

  it("Test Case 9: Buscar produto", () => {
    menu.acessarProdutos();

    // validar acesso à tela de 'All Products'
    assercao.validarExibicaoAllProducts();

    produto.buscarProduto("Dress");

    // validar busca de produtos
    assercao.validarExibicaoBuscaProdutos();
  });

  it("Test Case 10: Verifique inscrição na página inicial", () => {
    menu.realizarInscricaoEmail("ladybug@teste.com");

    // validação de sucesso
    assercao.validarExibicaoMensagem("You have been successfully subscribed!");
  });

  it("Test Case 15: Realizar pedido - Registrar-se antes de finalizar a compra", () => {
    menu.acessarCadastroLogin();
    cadastro.preencherFormulario();
    // Validação criação de conta
    assercao.validarCadastroUsuarioComSucesso();

    menu.botaoClicarContinuar();
    cy.get("body").should("contain", Cypress.env("signUpName"));

    produto.adicionarProduto();
    produto.verProdutoCarrinho();
    produto.prosseguirFinalizacaoCompra();

    // validar exibição de Detalhes de endereço e revisão de compra
    assercao.validarExibicaoDetalhesEnderecoRevisaoCompra();

    // inserir comentário sobre o pedido (opcional)
    produto.preencherCampoDetalhesCompra();

    produto.realizarPedido();

    produto.preencherDadosPagamento();
    produto.realizarPagamentoFinalizarCompra();

    assercao.validarExibicaoMensagem("Your order has been confirmed!");

    menu.acessarDeletarConta();
    //validar que a conta foi deletada
    assercao.validarExibicaoMensagem("Account Deleted");

    menu.botaoClicarContinuar();
  });
});
