import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import CommonsPage from "../pageobjects/commonsPage";

const commonsPage = new CommonsPage

Then('deve ser exibida a mensagem {string}', mensagem => {
    commonsPage.mensagemExibida(mensagem);
})
When('clico em salvar', () => {
    commonsPage.clicarSalvar();
})
Then('devem ser listados apenas {string} registros', total => {
    commonsPage.registrosListados(total);
})
When('clico para abrir a lista de itens do menu', () => {
    commonsPage.abrirMenu();
})
    
Then('o menu deve conter os itens {string}', itens => {
    commonsPage.itensMenuListados(itens);
})

