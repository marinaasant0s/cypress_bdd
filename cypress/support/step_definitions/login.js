/// <reference types="cypress" />

//2- transformar o gherkin em método/ação

import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import login_page from "../pages/login_page"

Given("I am on login screen", () => {
    home_page.acessLogin()
})

Given("I fill e-mail", () => {
    login_page.emailField('teste@test.com')
})

Given("I fill my credencials", () => {
    login_page.emailField('teste@test.com')
    login_page.passwordField('teste123')
})

When("I click on login", () => {
    login_page.loginButton()
})

Then("I see the message {string}",(message) => {
    login_page.invalidInput(message)
})

Then("I see sucess message",() => {
    login_page.assertMessageSucess()
})
