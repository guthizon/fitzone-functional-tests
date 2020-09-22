import RelatoriosPageElements from "../elements/relatoriosPageEements";
import HomeElements from '../elements/homePageElements'

const elHome = new HomeElements

class RelatoriosPage extends RelatoriosPageElements {

    acessarTelaRelatorios() {
        cy.get(elHome.botaoMenu()).click();
        cy.xpath(elHome.acessarItemMenu('Relatórios')).click();
    }

    informarDataInicial() {
        cy.get(this.campoDataInicial()).click().type('01/08/2020').blur();
    }
    
    informarDataFinal() {
        cy.get(this.campoDataFinal()).click().type('20/09/2020').blur();
    }
    
    clicarBotaoExecutar() {
        cy.get(this.botaoExecutar()).focus().click();
    }

    clientesDevemSerListados() {
        cy.get('table').find('td').should('contain', 'Leonardo Thizon');
        cy.get('table').find('td').should('contain', 'Valentina');
    }

    clicarAgrupar() {
        cy.get(this.checkAgrupar()).should('be.visible').click({force: true}).blur();
    }

    selecionarCliente(cliente) {
        cy.get(this.campoUsuarios()).click({force: true}).type(cliente, {force: true}).type('{downarrow}').type('{enter}').type('{esc}');
    }

    clienteDeveSerListado(cliente) {
        cy.get('table').find('td').should('contain', cliente);
    }

    totalCheckinsExibidos(checkins) {
        cy.xpath(this.campoTotalCheckins(checkins)).should('be.visible');
    }


}

export default RelatoriosPage