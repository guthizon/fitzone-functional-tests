import TreinosProgressoPageElements from "../elements/treinosProgressoPageElements";

class TreinosProgressoPage extends TreinosProgressoPageElements {

    acessarTreinosProgresso() {
        cy.fixture('properties').then((prop => {
            cy.visit(`${prop.url}/#/inprogress`)
        }))
    }

    informacoesTreinoProgressoExibidas() {
        cy.get(this.clienteProgresso()).should('contain', 'Siélen Izidoro')
        cy.xpath(this.clienteProgressoExercicio()).should('is.visible')
    }
}

export default TreinosProgressoPage