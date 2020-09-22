import CheckinsPageElements from '../elements/checkinsPageElements'

class CheckinsPage extends CheckinsPageElements {

    acessarCadastroCheckins(){
        cy.fixture('properties').then((prop => {
            cy.visit(`${prop.url}/#/checkin`)
        }))
    }

    informarCodigoCheckin(codigo) {
        cy.get(this.campoCodigo()).type(codigo);
    }

    clicarIniciarTeclado() {
        cy.xpath(this.botaoIniciarTeclado()).click();
    }

    clicarPular() {
        cy.xpath(this.botaoPular()).click();
    }
    
    clicarConfirmarPular() {
        cy.xpath(this.botaoConfirmarPular()).click();
    }
    
    clicarIniciar() {
        cy.xpath(this.botaoIniciar()).click();
    }

}

export default CheckinsPage