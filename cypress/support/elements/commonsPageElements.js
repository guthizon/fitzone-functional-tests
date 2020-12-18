class CommonsPageElements {
    mensagemSnackbar = () => { return '.v-snack__content'}
    botaoSalvar = () => { return '//*[@type="button"]//following::*[contains(text(),"Salvar")]'}   
    botaoSim = () => { return '//*[@type="button"]//following::*[contains(text(),"Sim")]'}   
    dialogConfirmacao = mensagem => { return `//*[contains(text(),"${mensagem}")]`}
    totalRegistros = total => {return `//*[@class="v-data-footer__pagination" and contains(text(), "of ${total}")]`}
}

export default CommonsPageElements