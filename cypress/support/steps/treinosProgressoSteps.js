import { And, Then, When, Given } from "cypress-cucumber-preprocessor/steps";
import TreinosProgressoPage from "../pageobjects/treinosProgressoPage";

const progressoPage = new TreinosProgressoPage


When('acesso a tela de treinos em progresso', () => {
    progressoPage.acessarTreinosProgresso();
})
Then('deve ser exibido as informações do treino do cliente', () => {
    progressoPage.informacoesTreinoProgressoExibidas();
})