/// <reference types="cypress" />

//elementos 
const elements = {
    buttons: {
        loginButton: '#btnLogin'
    },

    messages: {
        invalidInput: '.invalid_input',
        assertMessageSucess: '.swal2-title'
    },

    fields:{
        emailField: '#user',
        passwordField: '#password'
    }
}

//3- criar as ações da page
export default{

    loginButton(){
        cy.get(elements.buttons.loginButton).click()
    },

    invalidInput(message){
        cy.get(elements.messages.invalidInput).should('have.text', message)
    },

    emailField(email){
        cy.get(elements.fields.emailField).type(email)
    },

    passwordField(password){
        cy.get(elements.fields.passwordField).type(password)
    },

    assertMessageSucess(){
        cy.get(elements.messages.assertMessageSucess).should('be.visible').should('have.text', "Login realizado")
    }

}