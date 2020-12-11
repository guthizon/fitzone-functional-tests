import WorkoutPageElements from '../elements/workoutsPageElements'
import CommonsPageElements from '../elements/commonsPageElements'

const comm = new CommonsPageElements

class WorkoutsPage extends WorkoutPageElements {

    clicarAdicionarTreinos() {
        // cy.server().route('GET', '/exercise').as('exercise');
        // cy.wait('@exercise').its('status').should('be', 200);
        cy.get(this.botaoExpandirBotoesAcoes()).click();
        cy.get(this.botaoAdicionarTreino()).click();
    }

    informarDadosDoTreino() {
        cy.fixture('properties').then((treino) => {
            cy.get(this.campoNomeTreino()).clear().type(treino.treino.nome);
            cy.get(this.campoDescricaoTreino()).clear().type(treino.treino.descricao);
        })
    }

    adicionarExercicioAoTreino(exercicio) {
        cy.get(this.campoSelecionarExercicio()).clear().type(exercicio);
        cy.xpath(this.SelecionarExercicioListado(exercicio)).click();
        cy.fixture('properties').then((treino) => {
            cy.get(this.campoRepsExercTreino()).clear().type(treino.treino.reps);
            cy.get(this.campoSeriesExercTreino()).clear().type(treino.treino.series);
            cy.get(this.campoOrdemExercTreino()).clear().type(treino.treino.ordem);
        })
    }
    
    clicarAdicionarExercicio() {
        cy.get(this.botaoAdicionarExercicio()).click();
    }

    alterarNomeTreino(nomeTreino) {
        cy.get(this.campoNomeTreino()).clear().type(nomeTreino);
    }
        
    editarTreino(treino) {
        cy.xpath(this.botaoEditarTreino(treino)).click();
    }
    
    selecionarTreino(treino) {
        cy.xpath(this.botaoSelecionarTreino(treino)).should('be.visible').click({force: true});
    }

    treinoCadastradoExibido(treino) {
        cy.xpath(this.cardTreinoCliente(treino)).should('be.visible').screenshot();
    }

    clicarBotaoExcluir() {
        cy.get(this.botaoExpandirBotoesAcoes()).click();
        cy.get(this.botaoExcluirTreino()).click();
    }
    
    copiarTreino() {
        cy.get(this.botaoExpandirBotoesAcoes()).click();
        cy.get(this.botaoCopiarTreino()).click();
    }

    selecionarUsuarioCopiarTreino(usuario) {
        cy.get(this.campoUsuariosCopiar()).type(usuario, {force: true});
        cy.xpath(this.selecionarUsuarioCopiar(usuario)).click({force: true});
    }
}

export default WorkoutsPage;