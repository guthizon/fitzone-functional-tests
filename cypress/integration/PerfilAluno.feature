@test
Feature: Acessar sistema com usuário com perfil Aluno

    Como aluno da academia,
    desejo poder acessar o sistema FitZone
    de modo que eu possa consultar meus treinos
    e fazer checkin no treino que eu desejar.

Scenario: Acessar Meus Treinos e realizar Checkin
    Given que acesso o sistema FitZone
    And informo o login "kamilatb@gmail.com"
    And informo a senha "teste"
    When clico no botão entrar
    Then acesso a página home do usuario aluno
    When acesso o cadastro Meus Treinos
    Then os treinos com opção de checkin devem ser exibidos
    When clico em realizar checkin no treino "Treino online"
    Then deve ser exibida a mensagem de confirmação "Realizar checkin para o treino"
    When clico no botão sim
    Then deve ser exibida a mensagem "Treino iniciado"


Scenario: Realizar checkin pelo menu Checkin
    Given que acesso o sistema FitZone
    And informo o login "kamilatb@gmail.com"
    And informo a senha "teste"
    When clico no botão entrar
    Then acesso a página home do usuario aluno
    And acesso o cadastro de checkins do aluno
    When clico em iniciar
    Then deve ser exibida a mensagem "Treino iniciado"

Scenario: Validar menu do Usuário
    Given que acesso o sistema FitZone
    And informo o login "kamilatb@gmail.com"
    And informo a senha "teste"
    When clico no botão entrar
    Then acesso a página home do usuario aluno
    When clico para abrir a lista de itens do menu
    Then o menu deve conter os itens "Home, Meus Treinos, Checkin , Alterar Senha, Sair"
