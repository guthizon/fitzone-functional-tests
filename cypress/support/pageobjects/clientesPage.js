import ClientesElements from '../elements/clientesPageElements'
import HomeElements from '../elements/homePageElements'
import WorkoutElements from '../elements/workoutsPageElements'

const elHome = new HomeElements
const work = new WorkoutElements

class ClientesPage extends ClientesElements {

    acessarCadastroClientes() {
        cy.get(elHome.botaoMenu()).click();
        cy.xpath(elHome.acessarItemMenu('Clientes')).click();
    }

    clientesListados() {
        cy.fixture('properties').then((cliente) => {
            cy.xpath(this.clienteListado(cliente.login)).should('be.visible').screenshot();
        })
    }

    selecionarOpcaoCampoSituacao(situacao) {
        cy.xpath(this.campoSituacaoCliente()).should('be.visible').click();
        cy.xpath(this.selecionarSituacaoCliente(situacao)).should('be.visible').click();
    }

    listarInativos() {
        cy.get(this.campoListarInativos()).click({force: true});
    }

    naoInformarDadosObrigatorios() {
        cy.get(this.telaCadastrarClienteCampoNome()).clear();
    }
    
    informarCamposObrigatoriosQueEstavamVazios() {
        cy.get(this.telaCadastrarClienteCampoNome()).clear().type('Felipe');
    }
    
    clicarBotaoEditarCliente(cliente) {
        cy.xpath(this.editarClientes(cliente)).click();
    }

    abrirTreinosCliente(cliente) {
        cy.xpath(this.workoutClientes(cliente)).click();
        cy.get(work.treinosListados()).should('be.visible');
    }

    clicarNovoCliente() {
        cy.get(this.botaoNovoCliente()).click();
    }
    
    localizarCliente(cliente) {
        cy.get(this.campoLocalizar()).type(cliente);
    }

    exibirClienteInativo(cliente) {
        cy.xpath(this.clienteInativoListado(cliente)).should('be.visible');
    }

    preencherDadosCadastroCliente() {
        cy.get(this.telaCadastrarClienteCampoNome()).clear().type('Automacao');
        cy.get(this.telaCadastrarClienteCampoCpf()).clear().type('085509522925')
        cy.get(this.telaCadastrarClienteCampoEmail()).clear().type('automacao@fitzone.com');
        cy.get(this.telaCadastrarClienteCampoPerfis()).click({force: true});
        cy.xpath(this.telaCadastrarClienteCampoPerfisOpcaoAdmin()).click({force: true});
        cy.get(this.telaCadastrarClienteCampoCelular()).click();
    }
}

export default ClientesPage;