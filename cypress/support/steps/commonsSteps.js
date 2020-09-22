import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import CommonsPage from "../pageobjects/commonsPage";

const commonsPage = new CommonsPage

Then('deve ser exibida a mensagem {string}', mensagem => {
    commonsPage.mensagemExibida(mensagem);
})
When('clico em salvar', () => {
    commonsPage.clicarSalvar();
})
