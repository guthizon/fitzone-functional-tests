@test
Feature: Cadastro de Clientes - Workouts

    Como administrador do sistema Fitzone,
    desejo poder cadastrar, excluir e alterar treino(s) para usuário cadastrado no sistema,
    de modo que eu possa copiar treinos já existentes para o(s) usuário(s).

    Critérios de aceite:
    - Sistema deve permitir copiar ou excluir treinos apenas se existir(em) treino(s) selecionado(s);
    - Sistema deve permitir cadastrar treino(s) apenas se existir ao menos um exercício cadastrado;
    - Deve ser exibido um dashboard contendo a quantidade de checkins das últimas semanas do cliente;
    - Deve ser possível adicionar um ou mais exercícios ao treino;

    Background: Acessar cadastro de clientes
        Given que acesso o sistema FitZone
        And que eu esteja logado
        When acesso o cadastro de clientes

    Scenario: Cadastrar treino
        And clico no botão para abrir os treinos do cliente "leowaterk"
        And clico no botão adicionar treinos
        And informo os dados do treino
        When adiciono o exercício "Agachamento Aberto" ao treino
        When clico em salvar
        Then deve ser exibida a mensagem "Treino cadastrado"
        And o treino deve ser listado na página de treinos do cliente

    Scenario: Alterar treino
        And clico no botão para abrir os treinos do cliente "leowaterk"
        And clico no botão editar do treino "teste"
        And altero o nome do treino para "treino alterado"
        When clico em salvar
        Then deve ser exibida a mensagem "Treino alterado com sucesso"

    Scenario: Excluir treino
        And clico no botão para abrir os treinos do cliente "leowaterk"
        When clico no check selecionar do treino "treino alterado"
        And clico no botão excluir treino
        Then deve ser exibida a mensagem de confirmação "Confirma exclusão"
        When clico no botão sim
        Then deve ser exibida a mensagem "Treino(s) excluído(s)"

    Scenario: Copiar treino para outro usuário
        And clico no botão para abrir os treinos do cliente "leowaterk"
        And seleciono o treino "deadlift automacao"
        And clico em copiar treino para outro usuário
        And seleciono o usuário "Fernanda Silvestre" para copiar treino
        When clico em salvar
        Then deve ser exibida a mensagem "Treino copiado com sucesso"
