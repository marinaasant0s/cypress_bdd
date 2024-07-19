#1- criar o cenário

Feature: Cadastro user
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

#usando o background vai executar o given que se repete em todos os testes
Background: Acess register screen 
    Given I am on register screen

    Scenario: Campo nome vazio
        When I click on register
        Then I see the message "O campo nome deve ser prenchido" on register

     Scenario: Campo e-mail vazio
        And I fill name field "Test user"
        When I click on register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo e-mail inválido
        And I fill e-mail field "invalid!test.com"
        When I click on register
        Then I see the message "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo senha vazio
        And I fill name field "Test user"
        And I fill e-mail field "teste@test.com"
        When I click on register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Campo senha inválido
        And I fill name field "Test user"
        And I fill e-mail field "teste@test.com"
        And I fill password field "123"
        When I click on register
        Then I see the message "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Cadastro de usuário com sucesso
        And I fill data of register
        When I click on register
        Then I see the sucess message on register