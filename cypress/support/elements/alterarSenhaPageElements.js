class AlterarSenhaElements {
    campoSenhaAtual = () => { return '[data-cy="currentPass"]'}    
    campoNovaSenha = () => { return '[data-cy="newPassword"]'}    
    campoConfirmacaoSenha = () => { return '[data-cy="aggreePassword"]'}
    botaoAlterarSenhaTelaPrincipal = () => { return `//*[@class='v-btn__content' and contains(text(), 'Alterar Senha')]` }
}

export default AlterarSenhaElements;