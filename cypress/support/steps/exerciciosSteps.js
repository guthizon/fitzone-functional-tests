import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import ExerciciosPage from '../pageobjects/exerciciosPage'

const exerciciosPage = new ExerciciosPage

When('acesso o cadastro de exercícios', () => {
    exerciciosPage.acessarCadastroExercicios();
})
Then('os exercícios devem ser listados', () => {
    exerciciosPage.exerciciosListados();
})
And ('clico para adicionar um novo exercício', () => {
    exerciciosPage.clicarAdicionarExercicio();
})
And ('informo os dados do exercício', () => {
    exerciciosPage.informarDadosExercicio();
})
And ('localizo o exercício {string}', exercicio => {
    exerciciosPage.localizarExercicio(exercicio);
})
And ('clico em editar o exercício {string}', exercicio => {
    exerciciosPage.editarExercicio(exercicio);
})
And ('informo a descrição {string}', descricao => {
    exerciciosPage.informarDescricaoExercicio(descricao);
})
And ('clico em excluir o exercício {string}', exercicio => {
    exerciciosPage.excluirExercicio(exercicio);
})