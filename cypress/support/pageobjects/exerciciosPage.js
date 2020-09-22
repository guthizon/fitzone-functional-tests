import ExerciciosPageElements from '../elements/exerciciosPageElements'
import HomePageElements from '../elements/homePageElements'

const elHome = new HomePageElements

class ExerciciosPage extends ExerciciosPageElements {

    acessarCadastroExercicios() {
        cy.get(elHome.botaoMenu()).click();
        cy.xpath(elHome.acessarItemMenu('Exercícios')).click();
    }

    exerciciosListados() {
        cy.get(this.botaoEditarExercicio()).should('be.visible');
    }

    clicarAdicionarExercicio() {
        cy.get(this.botaoNovoExercicio()).click();
    }

    informarDadosExercicio() {
        cy.fixture('properties').then((exercicio) => {
            cy.get(this.campoNomeExercicio()).type(exercicio.exercicio.nome);
            cy.get(this.campoDescricaoExercicio()).type(exercicio.exercicio.descricao);
        })
    }

    localizarExercicio(exercicio) {
        cy.get(this.campoLocalizarExercicio()).type(exercicio);
    }

    editarExercicio(exercicio) {
        cy.xpath(this.botaoEditarExercicioEspecifico(exercicio)).click();
    }
    
    informarDescricaoExercicio(descricao) {
        cy.get(this.campoDescricaoExercicio()).clear().type(descricao);
    }
    
    excluirExercicio(exercicio) {
        cy.xpath(this.botaoExcluirExercicio(exercicio)).click();
    }

}

export default ExerciciosPage
