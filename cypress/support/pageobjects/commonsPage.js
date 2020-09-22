import CommonsElements from '../elements/commonsPageElements.js'

class CommonsPage extends CommonsElements {

    mensagemExibida(mensagem) {
        cy.get(this.mensagemSnackbar())
        .should('contain', mensagem).screenshot();
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
        
}

export default CommonsPage;
