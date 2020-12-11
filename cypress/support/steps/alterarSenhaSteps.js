import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import AlterarSenhaPage from '../pageobjects/alterarSenhaPage'

const alterarSenhaPage = new AlterarSenhaPage;

When('acesso o menu trocar senha', () => {
    alterarSenhaPage.acessarMenuTrocarSenha();
})
Then('informo a senha atual {string}', senha => {
    alterarSenhaPage.informarSenhaAtual(senha);
})  
And('informo a nova senha {string}', senha => {
    alterarSenhaPage.informarNovaSenha(senha);
})
And('informo a confirmação de senha {string}', senha => {
    alterarSenhaPage.informarConfirmacaoSenha(senha);
})
When('clico em alterar senha no menu do usuario', () => {
    alterarSenhaPage.alterarSenhaMenuUsuario();
})

