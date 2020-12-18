import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../pageobjects/loginPage'

const loginPage = new LoginPage

Given('que acesso o sistema FitZone', () => {
    loginPage.acessarSite();
})

When('informo o login {string}', login => {
    loginPage.informarLogin(login);
})

When('informo a senha {string}', senha => {
    loginPage.informarSenha(senha);
})

When('clico no botão entrar', () => {
    loginPage.clicarBotaoEntrar();
})

Then('acesso a página home do sistema', () => {
    loginPage.acessarPaginaInicial();
})

Then('acesso a página home do usuario aluno', () => {
    loginPage.acessarPaginaInicialAluno();
})

Then('deve exibir a mensagem {string}', mensagem => {
    loginPage.mensagemValidacao(mensagem);
})

When('pressiono a tecla Enter para entrar', () => {
    loginPage.pressionarEnterParaEntrar();
})

And('que eu esteja logado', () => {
    loginPage.realizarLogin();
})
When('faço logout', () => {
    loginPage.realizarLogout();
})

