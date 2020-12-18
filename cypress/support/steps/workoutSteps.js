import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import WorkoutsPage from "../pageobjects/workoutsPage";
import CommonsPage from "../pageobjects/commonsPage";

const workoutsPage = new WorkoutsPage
const commons = new CommonsPage

And('clico no botão adicionar treinos', () => {
    workoutsPage.clicarAdicionarTreinos();
})
And('informo os dados do treino', () => {
    workoutsPage.informarDadosDoTreino();
})
When('adiciono o exercício {string} ao treino', exercicio => {
    workoutsPage.adicionarExercicioAoTreino(exercicio);
})
When('clico no botão editar do treino {string}', treino => {
    workoutsPage.editarTreino(treino);
})
When('clico no check selecionar do treino {string}', treino => {
    workoutsPage.selecionarTreino(treino);
})
When('altero o nome do treino para {string}', nomeTreino => {
    workoutsPage.alterarNomeTreino(nomeTreino);
})
When('seleciono o treino {string}', treino => {
    workoutsPage.selecionarTreino(treino);
})
And('clico em copiar treino para outro usuário', () => {
    workoutsPage.copiarTreino();
})
And('seleciono o usuário {string} para copiar treino', usuario => {
    workoutsPage.selecionarUsuarioCopiarTreino(usuario);
})
And('o treino {string} deve ser listado na página de treinos do cliente', treino => {
    workoutsPage.treinoCadastradoExibido(treino);
})
Then('deve ser exibida a mensagem de confirmação {string}', mensagem => {
    commons.dialogoConfirmacao(mensagem);
})
When('clico no botão sim', () => {
    commons.clicarBotaoSim();
})
When('clico no botão excluir treino', () => {
    workoutsPage.clicarBotaoExcluir();
})
Then('deve apresentar o dashboard de checkins das últimas semanas do cliente com os valores {string}', checkins => {

})
