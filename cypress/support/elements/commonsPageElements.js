import CommonsPage from "../pageobjects/commonsPage";

class CommonsPageElements {
    mensagemSnackbar = () => { return '.v-snack__content'}
    botaoSalvar = () => { return '//*[@type="button"]//following::*[text()="Salvar"]'}   
    botaoSim = () => { return '//*[@type="button"]//following::*[contains(text(),"Sim")]'}   
    dialogConfirmacao = mensagem => { return `//*[contains(text(),"${mensagem}")]`}   
}

export default CommonsPageElements