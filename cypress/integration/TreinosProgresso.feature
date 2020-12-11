@test
Feature: Tela de treinos em progresso

    Como cliente da academia,
    desejo poder visualizar meu treino com a descrição dos exercícios a serem realizados
    em uma tela dentro da academia. 
    Esse será o treino dia que eu inciarei após realizar o checkin.
    
    Scenario: Visualizar treino em progresso
        Given que acesso o sistema FitZone
        And que eu esteja logado
        And acesso o cadastro de checkins
        When informo o código "0205" para fazer o checkin
        And clico no botao iniciar do teclado
        And clico em iniciar
        Then deve ser exibida a mensagem "Treino iniciado"
        When acesso a tela de treinos em progresso
        Then deve ser exibido as informações do treino do cliente