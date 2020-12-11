@test
Feature: Alterar Senha

    Como usuário do sistema Fitzone,
    sendo ele administrador ou aluno,
    desejo poder alterar minha Senha
    de modo que ao realizar a alteração da mesma,
    eu consiga acessar o sistema apenas com a nova senha

Scenario: Validar cadastro senhas diferentes
    Given que acesso o sistema FitZone
    And informo o login "aynara"
    And informo a senha "teste"
    When clico no botão entrar
    Then acesso a página home do usuario aluno
    When clico em alterar senha no menu do usuario
    Then informo a senha atual "teste"
    And informo a nova senha "aluno"
    And informo a confirmação de senha "aluno2"
    And clico em salvar
    Then deve ser exibida a mensagem "Nova senha e confirmação de senha estão diferentes"
    When informo a senha atual "testes"
    And informo a nova senha "aluno"
    And informo a confirmação de senha "aluno"
    And clico em salvar
    Then deve ser exibida a mensagem "Senha atual inválida"
    When informo a senha atual "teste"
    And informo a nova senha "alunos"
    And informo a confirmação de senha "aluno"
    And clico em salvar
    Then deve ser exibida a mensagem "Senha atual inválida"

Scenario: Alterar senha usuário Administrador
    Given que acesso o sistema FitZone
    And informo o login "gthizon@gmail.com"
    And informo a senha "teste"
    When clico no botão entrar
    Then acesso a página home do sistema
    When acesso o menu trocar senha
    Then informo a senha atual "teste"
    And informo a nova senha "teste2"
    And informo a confirmação de senha "teste2"
    And clico em salvar
    Then deve ser exibida a mensagem "Senha alterada com sucesso"
    When faço logout
    And informo o login "gthizon@gmail.com"
    And informo a senha "teste2"
    When clico no botão entrar
    Then acesso a página home do sistema

Scenario: Alterar senha usuário Aluno
    Given que acesso o sistema FitZone
    And informo o login "aynara"
    And informo a senha "teste"
    When clico no botão entrar
    Then acesso a página home do usuario aluno
    When clico em alterar senha no menu do usuario
    Then informo a senha atual "teste"
    And informo a nova senha "aluno"
    And informo a confirmação de senha "aluno"
    And clico em salvar
    Then deve ser exibida a mensagem "Senha alterada com sucesso"
    When faço logout
    And informo o login "aynara"
    And informo a senha "aluno"
    When clico no botão entrar
    Then acesso a página home do usuario aluno
