import { And, Then, When, Given } from "cypress-cucumber-preprocessor/steps";
import CheckinsPage from "../pageobjects/checkinsPage";

const checkinsPage = new CheckinsPage

Given('acesso o cadastro de checkins', () => {
    checkinsPage.acessarCadastroCheckins();
})
Given('acesso o cadastro de checkins do aluno', () => {
    checkinsPage.acessarCadastroCheckinsAluno();
})
When('informo o código {string} para fazer o checkin', codigo => {
    checkinsPage.informarCodigoCheckin(codigo);
})
And('clico em iniciar', () => {
    checkinsPage.clicarIniciar();
})
And('clico no botao iniciar do teclado', () => {
    checkinsPage.clicarIniciarTeclado();
})
When('clico em pular', () => {
    checkinsPage.clicarPular();
})

When('clico em confirmar pular', () => {
    checkinsPage.clicarConfirmarPular();
})