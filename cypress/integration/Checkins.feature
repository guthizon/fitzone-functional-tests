@test
Feature: Cadastro de Checkins

    Como cliente da academia,
    desejo poder realizar checkins para a realização dos meus treinos
    de modo que quando eu realizar o checkin do dia,
    o sistema já me mostre qual o meu treino do dia a ser realizado.
    Caso eu deseje mudar de treino, antes de confirmar o checkin eu gostaria
    de poder trocar o treino a ser realizado.

    Background: Acessar tela de checkins
        Given que eu esteja na tela de checkins

    Scenario: Realizar checkin usuário válido
        When informo o código "2" para fazer o checkin
        And clico no botao iniciar do teclado
        And clico em iniciar
        Then deve ser exibida a mensagem "Treino iniciado"

    Scenario: Realizar checkin usuário inativo
        When informo o código "1907" para fazer o checkin
        And clico no botao iniciar do teclado
        Then deve ser exibida a mensagem "O usuário informado está inativo. Verifique seu cadastro"

    Scenario: Realizar checkin usuário inválido
        When informo o código "55" para fazer o checkin
        And clico no botao iniciar do teclado
        Then deve ser exibida a mensagem "Usuário inválido"

    Scenario: Pular treino
        When informo o código "2" para fazer o checkin
        And clico no botao iniciar do teclado
        And clico em pular
        Then deve ser exibida a mensagem de confirmação "Deseja pular o treino"
        When clico em confirmar pular
        And clico em iniciar
        Then deve ser exibida a mensagem "Treino iniciado"