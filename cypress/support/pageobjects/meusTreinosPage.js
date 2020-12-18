import MeusTreinosElements from '../elements/meusTreinosPageElements'
import LoginElements from '../elements/loginPageElements'

const el = new LoginElements

class MeusTreinosPage extends MeusTreinosElements {
    acessarMeusTreinos() {
        cy.xpath(el.botaoMeusTreinoTelaPrincipal()).click();
    }
    checkinPorTreino() {
        cy.xpath(this.botaoCheckin()).should('is.visible').screenshot();
    }
    realizarCheckinNoTreino(treino) {
        cy.xpath(this.botaoCheckinTreino(treino)).click();
    }
}

export default MeusTreinosPage;