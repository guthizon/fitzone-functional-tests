@test
Feature: Tenant - Acesso ao sistema com diferentes usuários de diferentes academias

    Como administrador do sistema Fitzone,
    desejo que os usuários sejam cadastrados para cada academia individualmente
    onde ao acessar o sistema com o login pré-definido,
    o usuário consiga visualizar os dados apenas do tenant ao qual ele está logado

Scenario: Logar no sistema com usuário de um segundo Tenant
    Given que acesso o sistema FitZone
    And informo o login "bruno_@gmail.com"
    And informo a senha "11111"
    When clico no botão entrar
    Then acesso a página home do sistema
    When acesso o cadastro de clientes
    Then o cliente "Kamila" deve ser listado
    And devem ser listados apenas "2" registros
    When clico no botão para abrir os treinos do cliente "Kamila"
    Then o treino "Treino online" deve ser listado na página de treinos do cliente

Scenario: Realizar checkin no segundo Tenant com usuário do primeiro Tenant
    Given que acesso o sistema FitZone
    And informo o login "bruno_@gmail.com"
    And informo a senha "11111"
    When clico no botão entrar
    Then acesso a página home do sistema
    When acesso o cadastro de checkins
    And informo o código "2" para fazer o checkin
    And clico no botao iniciar do teclado
    Then deve ser exibida a mensagem "Usuário inválido"

Scenario: Realizar checkin usuário válido do segundo Tenant
    Given que acesso o sistema FitZone
    And informo o login "bruno_@gmail.com"
    And informo a senha "11111"
    When clico no botão entrar
    Then acesso a página home do sistema
    And acesso o cadastro de checkins
    And informo o código "05120508995" para fazer o checkin
    And clico no botao iniciar do teclado
    When clico em iniciar
    Then deve ser exibida a mensagem "Treino iniciado"

Scenario: Verificar se no Tenant Principal são exibidos dados do novo Tenant
    Given que acesso o sistema FitZone
    And que eu esteja logado
    And acesso o cadastro de clientes
    When localizo o cliente "Kamila"
    Then o cliente "Kamila" não deve ser listado