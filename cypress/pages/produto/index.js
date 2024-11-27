import { faker } from '@faker-js/faker'


class Produto{
    buscarProduto(nomeProduto){
        cy.get('input#search_product').type(nomeProduto)
        cy.get('button#submit_search').click()
    }

    selecionarPrimeiroProdutoVisivel(){
        cy.get('.single-products')
          .should('be.visible')
          .and('have.length.at.least', 1)
          .first()
          .parent()
          .contains('View Product')
          .click()
    }

    adicionarProduto(){
        cy.contains("Add to cart").click()
    }

    verProdutoCarrinho(){
        cy.contains("View Cart").click()
    }

    prosseguirFinalizacaoCompra(){
        cy.get('.btn-default.check_out')
          .should('be.visible')
          .click()
    }

    realizarPedido(){
        cy.get('.btn-default.check_out').click()
    }

    preencherCampoDetalhesCompra(){
        cy.get('.form-control').type(faker.commerce.productDescription())
    }

    preencherDadosPagamento(){
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName())
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber())
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV())
        cy.get('[data-qa="expiry-month"]').type(10)
        cy.get('[data-qa="expiry-year"]').type(2026)
    }

    realizarPagamentoFinalizarCompra(){
        cy.get('[data-qa="pay-button"]').click()
    }

    
}

export default new Produto()