import CheckinsPageElements from '../elements/checkinsPageElements'
import HomeElements from '../elements/homePageElements'

const elHome = new HomeElements
class CheckinsPage extends CheckinsPageElements {

    acessarCadastroCheckins(){
        cy.get(elHome.botaoMenu()).click();
        cy.xpath(elHome.acessarItemMenuCheckin('Checkin')).click();
    }
    
    acessarCadastroCheckinsAluno(){
        cy.get(elHome.botaoMenu()).click();
        cy.xpath(elHome.acessarItemMenuCheckin('Checkin ')).click();
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