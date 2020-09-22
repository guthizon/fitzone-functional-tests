@test
Feature: Cadastro de Clientes - CRUD

        Como administrador do sistema FitZone,
        desejo poder cadastrar clientes com todas suas informações pessoais,
        de modo que eu possa gerenciar seus treinos.

    Background: Acessar cadastro de clientes
        Given que acesso o sistema FitZone
        And que eu esteja logado
        When acesso o cadastro de clientes
    
    Scenario: Listar Clientes
        Then os clientes devem ser listados
    
    Scenario: Cadastrar Cliente
        And clico no botão Novo Cliente
        And não informo os campos obrigatórios do cliente
        When clico em salvar
        Then deve ser exibida a mensagem "Informe todos os campos"
        When informo todos os campos obrigatórios do cadastro de clientes
        When clico em salvar
        Then deve ser exibida a mensagem "cadastrado com sucesso"

    Scenario: Editar Cliente
        And clico para editar o cliente "felipe"
        And não informo os campos obrigatórios do cliente
        When clico em salvar
        Then deve ser exibida a mensagem "Informe todos os campos"
        When informo os campos obrigatórios que não estavam preenchidos
        When clico em salvar
        Then deve ser exibida a mensagem "alterado com sucesso"
    
    Scenario: Inativar Cliente
        And localizo o cliente "Aynara"
        And clico para editar o cliente "Aynara"
        And seleciono a opção "Inativo" no campo Situação
        When clico em salvar
        Then deve ser exibida a mensagem "alterado com sucesso"
        When clico para listar clientes inativos
        Then o cliente "Aynara" deve ser exibido com situação inativo

