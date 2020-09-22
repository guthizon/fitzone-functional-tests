class CheckinsPageElements {
    campoCodigo = () => {return '[data-cy="codigo"]'}
    botaoIniciarTeclado = () => {return '//*[@class="key"]//parent::*[text()="INICIAR"]'}
    botaoPular = () => {return '//button//*[text()="Pular"]'}
    botaoConfirmarPular = () => {return '//*[contains(text(),"Deseja pular")]//following::*[text()="Pular"]'}
    botaoIniciar = () => {return '//button//*[text()="Iniciar"]'}
}

export default CheckinsPageElements