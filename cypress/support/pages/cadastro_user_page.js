/// <reference types="cypress" />

//elementos 
const elements = {
    buttons: {
        verifyPage: '#top_header',
        buttonRegister: '#btnRegister'
    },

    messages: {
        invalidField: '.errorLabel',
        assertRegisterSucess: '#swal2-title'
    },

    fields: {
        nameField: '#user',
        emailField: '#email',
        passwordField: '#password'
    }
}

//3- criar as ações da page

export default {
    buttonRegister(){
        cy.get(elements.buttons.buttonRegister).click()
    },

    invalidField(message){
        cy.get(elements.messages.invalidField).should('have.text', message)
    },

    nameField(name){
        cy.get(elements.fields.nameField).type(name)
    }, 

    emailField(email){
        cy.get(elements.fields.emailField).type(email)
    }, 

    passwordField(password){
        cy.get(elements.fields.passwordField).type(password)
    }, 

    assertRegisterSucess(){
        cy.get(elements.messages.assertRegisterSucess).should('be.visible').should('have.text', "Cadastro realizado!")
    }
}