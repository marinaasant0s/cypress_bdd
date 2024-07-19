/// <reference types="cypress" />

//2- transformar o gherkin em método/ação

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import cadastro_user_page from "../pages/cadastro_user_page"
import { emit } from "process"


Given("I am on register screen", () => {
    home_page.acessRegister()
})

Given("I fill name field", () => {
    cadastro_user_page.nameField('Test user')
})

//e-mail inválido
Given("I fill e-mail field {string}", (email) =>{
    cadastro_user_page.nameField('Test user')
    cadastro_user_page.emailField(email)
})

//e-mail válido
Given("I fill name field {string}", (email) => {
    cadastro_user_page.nameField('Test user')
    cadastro_user_page.emailField(email)
})

//senha inválida
Given("I fill password field {string}", (password) => {
    cadastro_user_page.passwordField(password)
})

Given("I fill data of register",() => {
    cadastro_user_page.nameField('Test user')
    cadastro_user_page.emailField('teste@test.com')
    cadastro_user_page.passwordField('teste123')
})

When("I click on register", () => {
    cadastro_user_page.buttonRegister()
})

Then("I see the message {string} on register",(message) => {
    cadastro_user_page.invalidField(message)
})

Then("I see the sucess message on register",(message) => {
    cadastro_user_page.assertRegisterSucess(message)
})