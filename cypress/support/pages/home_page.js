/// <reference types="cypress" />

//elementos 
const elements = {
    action: {
        verifyPage: '#top_header',
        clickIconLogin: '.fa-user',
        clickIconRegister: '.fa-lock'
    }
}

//3- criar as ações da page

export default {
    acessLogin(){
        cy.visit('/').get(elements.action.verifyPage)
        cy.get(elements.action.clickIconLogin).click()
    },

    acessRegister(){
        cy.visit('/').get(elements.action.verifyPage)
        cy.get(elements.action.clickIconRegister).click()
    },
}