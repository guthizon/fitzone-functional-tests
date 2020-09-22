class LoginElements {
    email = () => {return '[cy-data="email"]'}
    senha = () => {return '[cy-data="password"]'}
    botaoLogin = () => { return '[cy-data="btn-login"]' }
    telaPrincipalQuadroCheckinsSemana = () => { return '//*[contains(text(),"Checkins nos últimos dias")]' }
    mensagemValidacao = () => { return '.danger-alert' }
}

export default LoginElements;