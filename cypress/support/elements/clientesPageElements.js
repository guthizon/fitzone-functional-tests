class ClientesElements {
    cadastroClientes = () => { return '//nav//div[text() = \'Clientes\'][1]'}    
    botaoNovoCliente = () => { return '[data-cy="btn-cliente"]'}    
    campoSituacaoCliente = () => { return '//*[@data-cy="situacao"]//ancestor::*[@class="v-select__slot"]'}    
    campoListarInativos = () => { return '[data-cy="listar-inativos"]'}    
    campoLocalizar = () => { return '[data-cy="input-localizar"]'}    
    selecionarSituacaoCliente = situacao => { return `//*[@data-cy="situacao"]//following::*[text()="${situacao}"]`}    
    clienteListado = (cliente) => { return `//td[contains(text(),"${cliente}")]`}
    telaCadastrarCliente = () => { return '//*[text() = \'Novo Cliente\']'}    
    telaCadastrarClienteCampoNome = () => { return '[data-cy="nome"]'}    
    telaCadastrarClienteCampoCpf = () => { return '[data-cy="cpf"]'}
    telaCadastrarClienteCampoCelular = () => { return '[data-cy="celular"]'}
    telaCadastrarClienteCampoPerfis = () => { return '[data-cy="profile"]'}    
    telaCadastrarClienteCampoPerfisOpcaoAdmin = () => { return '//*[@data-cy="profile"]//following::*[contains(text(),"Adm")]'}    
    telaCadastrarClienteCampoEmail = () => { return '[data-cy="email"]'}    
    clienteInativoListado = cliente => { return `//td[contains(text(),"${cliente}")]//following::*[contains(@style,"color: red")][1]`}    
    workoutClientes = cliente => { return `//td[contains(text(),"${cliente}")]//following::*[@data-cy="abrir-treino"][1]`}
    editarClientes = cliente => { return `//td[contains(text(),"${cliente}")]//following::*[@data-cy="editar-cliente"][1]`}
}

export default ClientesElements;