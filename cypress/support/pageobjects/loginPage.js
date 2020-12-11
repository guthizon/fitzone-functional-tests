import LoginElements from '../elements/loginPageElements'
import HomeElements from '../elements/homePageElements'

const el = new LoginElements
const elHome = new HomeElements
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
        cy.get(el.telaPrincipalQuadroCheckinsSemana())
        .should('is.visible').screenshot();
    }
    
    acessarPaginaInicialAluno() {
        cy.xpath(el.botaoMeusTreinoTelaPrincipal())
        .should('is.visible').screenshot();
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
    realizarLogout() {
        cy.get(elHome.botaoMenu()).click();
        cy.xpath(elHome.acessarItemMenu('Sair')).click();
    }

}

export default LoginPage;
