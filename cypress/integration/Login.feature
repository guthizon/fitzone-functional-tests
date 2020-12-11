@test
Feature: Login do sistema

    Como usuário administrador do sistema FitZone
    Desejo acessar o sistema com minhas credencias válidas,
    de modo que caso eu informe usuário ou senha incorretos,
    o sistema deve emitir mensagem dizendo que os mesmos são inválidos.
    
    Scenario: Acessar com Login e senha válidos
        Given que acesso o sistema FitZone
        When informo o login "leowaterk@gmail.com"
        When informo a senha "pass@12345"
        When clico no botão entrar
        Then acesso a página home do sistema
    
    Scenario: Acessar com Login e senha válidos pressionando Enter
        Given que acesso o sistema FitZone
        When informo o login "leowaterk@gmail.com"
        When informo a senha "pass@12345"
        When pressiono a tecla Enter para entrar
        Then acesso a página home do sistema
    
    Scenario: Acessar com Login inválido
        Given que acesso o sistema FitZone
        When informo o login "leowaterk@gmail.co"
        When informo a senha "pass@12345"
        When clico no botão entrar
        Then deve exibir a mensagem "Usuário ou senha inválido(s). Verifique e tente novamente"
    
    Scenario: Acessar com Senha inválida
        Given que acesso o sistema FitZone
        When informo o login "leowaterk@gmail.com"
        When informo a senha "pass@123455"
        And clico no botão entrar
        Then deve exibir a mensagem "Usuário ou senha inválido(s). Verifique e tente novamente"

    Scenario: Alterar Senha