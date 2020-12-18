class LoginElements {
    email = () => {return '[cy-data="email"]'}
    senha = () => {return '[cy-data="password"]'}
    botaoLogin = () => { return '[cy-data="btn-login"]' }
    telaPrincipalQuadroCheckinsSemana = () => { return '[data-cy="btn-menu"]' }
    mensagemValidacao = () => { return '.danger-alert' }
    botaoMeusTreinoTelaPrincipal = () => { return `//*[@class='v-btn__content' and contains(text(), 'Acessar Meus Treinos')]` }
    botaoAlterarSenhaTelaPrincipal = () => { return `//*[@class='v-btn__content' and contains(text(), 'Alterar Senha')]` }
    botaoRealizarCheckinTelaPrincipal = () => { return `//*[@class='v-btn__content' and contains(text(), 'Realizar Checkin')]` }
}

export default LoginElements;