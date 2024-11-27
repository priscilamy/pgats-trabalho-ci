import { faker } from '@faker-js/faker'


class Cadastro {
    preencherFormulario(){
        const timestamp = new Date().getTime()
        const signUpName = 'LadyBug'

        Cypress.env('signUpName', signUpName)
       
        cy.get('[data-qa="signup-name"]').type(Cypress.env('signUpName'))
        cy.get('[data-qa="signup-email"]').type(`ladybug_${timestamp}@teste.com`)
        cy.contains('button', 'Signup').click()

        cy.get('input[type=radio]').check('Mr')
        cy.get('[type=password]').type('12345' , {log: false})

        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('January')
        cy.get('[data-qa="years"]').select('2000')

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type(faker.person.firstName())
        cy.get('[data-qa="last_name"]').type(faker.person.lastName())
        cy.get('[data-qa="company"]').type(faker.company.name())
        cy.get('[data-qa="address"]').type(faker.location.streetAddress())
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type(faker.location.state())
        cy.get('[data-qa="city"]').type(faker.location.city())
        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number())

        cy.get('[data-qa="create-account"]').click()
    }

    preencherNomeEmailCadastro(nome, email){
        cy.get('[data-qa="signup-name"]').type(nome)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
    }
}

export default new Cadastro()