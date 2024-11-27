class Contato{

    preencherFormularioContato(name, email, message){
      cy.get('[data-qa="name"]').type(name)
      cy.get('[data-qa="email"]').type(email)
      cy.get('[data-qa="message"]').type(message)
      
      cy.fixture('example.json').as('arquivo')
      cy.get('input[name="upload_file"]').selectFile('@arquivo')

      cy.get('[data-qa="submit-button"]').click()
    }

    
}

export default new Contato()