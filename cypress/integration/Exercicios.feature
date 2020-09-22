@test
Feature: Cadastro de Exercícios - CRUD

    Como administrador do sistema Fitzone,
    desejo poder cadastrar exercícios
    de modo que estes sejam vinculador posteriormente a treinos
    que serão cadastrados para os clientes.

    Background: Acessar cadastro de Exercícios
        Given que acesso o sistema FitZone
        And que eu esteja logado
        When acesso o cadastro de exercícios

    Scenario: Listar Exercícios
        Then os exercícios devem ser listados

    Scenario: Adicionar Exercício
        And clico para adicionar um novo exercício
        And informo os dados do exercício
        When clico em salvar
        Then deve ser exibida a mensagem "criado com sucesso"

    Scenario: Editar Exercício
        And localizo o exercício "Abdominal"
        And clico em editar o exercício "Abdominal"
        And informo a descrição "Abdominal automação"
        When clico em salvar
        Then deve ser exibida a mensagem "alterado com sucesso"

    Scenario: Excluir Exercício
        And localizo o exercício "Canivete"
        And clico em excluir o exercício "Canivete"
        When clico no botão sim
        Then deve ser exibida a mensagem "removido com sucesso"
