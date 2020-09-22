@test
Feature: Relatórios do sistema

    Como adminstrador do sistema Fitzone,
    desejo ter relatórios para gerenciar os checkins feitos pelos clientes
    de modo que eu possa analisar os treinos realizadas e o total de checkins realizados.

    Background: Acessar cadastro de relatórios
        Given que acesso o sistema FitZone
        And que eu esteja logado
        And que eu esteja na tela de relatórios


    Scenario: Listar todos os clientes por data
        And informo a data inicial
        And informo a data final
        When clico no botão executar
        Then devem ser listados todos os clientes

    Scenario: Agrupar clientes
        And informo a data inicial
        And informo a data final
        And clico em agrupar
        And seleciono o cliente "Aynara"
        And seleciono o cliente "Ahmad Yaser Uthman"
        When clico no botão executar
        Then o cliente "Aynara" deve ser listado
        Then o cliente "Ahmad Yaser Uthman" deve ser listado
        And deve ser exibido o total de "28" checkins

    Scenario: Listar apenas um cliente selecionado
        And informo a data inicial
        And informo a data final
        And seleciono o cliente "Aynara"
        When clico no botão executar
        Then o cliente "Aynara" deve ser listado
        And deve ser exibido o total de "14" checkins

  