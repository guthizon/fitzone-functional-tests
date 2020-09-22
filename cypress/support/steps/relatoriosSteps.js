import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import RelatoriosPage from "../pageobjects/relatoriosPage";

    const relatoriosPage = new RelatoriosPage

    And('que eu esteja na tela de relatórios', () => {
        relatoriosPage.acessarTelaRelatorios();
    })
    And('informo a data inicial', () => {
        relatoriosPage.informarDataInicial();
    })
    And('informo a data final', () => {
        relatoriosPage.informarDataFinal();
    })
    When('clico no botão executar', () => {
        relatoriosPage.clicarBotaoExecutar();
    })
    Then('devem ser listados todos os clientes', () => {
        relatoriosPage.clientesDevemSerListados();
    })
    And('clico em agrupar', () => {
        relatoriosPage.clicarAgrupar();
    })
    And('seleciono o cliente {string}', cliente => {
        relatoriosPage.selecionarCliente(cliente);
    })
    Then('o cliente {string} deve ser listado', cliente => {
        relatoriosPage.clienteDeveSerListado(cliente);
    })
    And('deve ser exibido o total de {string} checkins', checkins => {
        relatoriosPage.totalCheckinsExibidos(checkins);
    })


