import CommonsElements from '../elements/commonsPageElements.js'
import HomeElements from '../elements/HomePageElements.js'

const elHome = new HomeElements
class CommonsPage extends CommonsElements {

    mensagemExibida(mensagem) {
        cy.get(this.mensagemSnackbar())
        .should('contain', mensagem);
        cy.screenshot();
    }
    clicarSalvar() {
        cy.xpath(this.botaoSalvar()).click({force: true});
    }
    dialogoConfirmacao(mensagem) {
        cy.xpath(this.dialogConfirmacao(mensagem)).should('contain', mensagem);
    }
    clicarBotaoSim() {
        cy.xpath(this.botaoSim()).click();
    }
    registrosListados(total) {
        cy.xpath(this.totalRegistros(total)).should('is.visible').screenshot();
    }
    abrirMenu() {
        cy.get(elHome.botaoMenu()).click();
    }
    itensMenuListados(itens) {
        let itensMenu = itens.split(',');
        setTimeout(() => {
            for(let i = 0; i < itensMenu.length; i++) {
                let menu = itensMenu[i];
                cy.xpath(elHome.acessarItemMenu(menu)).should('exist').screenshot()
            }
        }, 500);
    }
}

export default CommonsPage;
