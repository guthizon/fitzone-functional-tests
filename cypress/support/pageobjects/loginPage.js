import LoginElements from '../elements/loginPageElements'

const el = new LoginElements
const url = 'http://localhost:8080'

class LoginPage {

    acessarSite() {
        cy.visit(url).screenshot();
    }

    informarLogin(login) {
        cy.get(el.email()).type(login).screenshot();
    }
    
    informarSenha(senha) {
        cy.get(el.senha()).type(senha).screenshot();
    }
    
    clicarBotaoEntrar() {
        cy.get(el.botaoLogin()).click();
    }

    acessarPaginaInicial() {
        cy.xpath(el.telaPrincipalQuadroCheckinsSemana())
        .should('contain', 'Checkins nos últimos dias').screenshot();
    }
  
    mensagemValidacao(mensagem) {
        cy.get(el.mensagemValidacao())
        .should('contain', mensagem).screenshot();
    }

    pressionarEnterParaEntrar() {
        cy.get(el.senha()).type('{enter}').screenshot();
    }
    
    realizarLogin() {
        cy.fixture('properties').then((profile) => {
            cy.get(el.email()).type(profile.login);
            cy.get(el.senha()).type(profile.password);
            this.clicarBotaoEntrar();
            this.acessarPaginaInicial();
        })
    }

}

export default LoginPage;
