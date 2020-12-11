import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import ClientesPage from '../pageobjects/clientesPage'

const clientesPage = new ClientesPage

When('acesso o cadastro de clientes', () => {
    clientesPage.acessarCadastroClientes();
})
Then('os clientes devem ser listados', () => {
    clientesPage.clientesListados();
})
And('clico no botão Novo Cliente', () => {
    clientesPage.clicarNovoCliente();
})
And('não informo os campos obrigatórios do cliente', () => {
    clientesPage.naoInformarDadosObrigatorios();
})
And('informo os campos obrigatórios que não estavam preenchidos', () => {
    clientesPage.informarCamposObrigatoriosQueEstavamVazios();
})
when('informo todos os campos obrigatórios do cadastro de clientes', () => {
    clientesPage.preencherDadosCadastroCliente();
})
And('seleciono a opção {string} no campo Situação', situacao => {
    clientesPage.selecionarOpcaoCampoSituacao(situacao);
})
Then('o cliente {string} deve ser exibido com situação inativo', cliente => {
    clientesPage.exibirClienteInativo(cliente);
})
Then('o cliente {string} não deve ser listado', cliente => {
    clientesPage.clienteNaoListado(cliente);
})
And('clico para editar o cliente {string}', cliente => {
    clientesPage.clicarBotaoEditarCliente(cliente);
})
And('localizo o cliente {string}', cliente => {
    clientesPage.localizarCliente(cliente);
})
And('clico no botão para abrir os treinos do cliente {string}', cliente => {
    clientesPage.abrirTreinosCliente(cliente);
})
When('clico para listar clientes inativos', () => {
    clientesPage.listarInativos();
})
Then('nenhum cliente deve ser listado', () => {
    clientesPage.nenhumClienteListado();
})

