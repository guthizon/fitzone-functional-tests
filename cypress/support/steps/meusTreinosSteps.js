import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import MeusTreinosPage from '../pageobjects/meusTreinosPage'

const meusTreinosPage = new MeusTreinosPage;

When('acesso o cadastro Meus Treinos', () => {
    meusTreinosPage.acessarMeusTreinos();
})

Then('os treinos com opção de checkin devem ser exibidos', () => {
    meusTreinosPage.checkinPorTreino();
})

When('clico em realizar checkin no treino {string}', treino => {
    meusTreinosPage.realizarCheckinNoTreino(treino);
})
