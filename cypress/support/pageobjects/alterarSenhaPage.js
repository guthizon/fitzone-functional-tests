import AlterarSenhaElements from '../elements/alterarSenhaPageElements'
import HomeElements from '../elements/homePageElements'

const home = new HomeElements

class AlterarSenhaPage extends AlterarSenhaElements {
    acessarMenuTrocarSenha() {
        cy.get(home.botaoMenu()).click();
        cy.xpath(home.acessarItemMenu('Alterar Senha')).click();
    }
    informarSenhaAtual(senha) {
        cy.get(this.campoSenhaAtual(senha)).clear().type(senha);
    }
    informarNovaSenha(senha) {
        cy.get(this.campoNovaSenha(senha)).clear().type(senha);
    }
    informarConfirmacaoSenha(senha) {
        cy.get(this.campoConfirmacaoSenha(senha)).clear().type(senha);
    }
    alterarSenhaMenuUsuario() {
        cy.xpath(this.botaoAlterarSenhaTelaPrincipal()).click();
    }
}

export default AlterarSenhaPage;