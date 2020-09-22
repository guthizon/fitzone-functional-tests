class WorkoutPageElements {
    botaoEditarTreino = treino => {return `//h3[contains(text(),"${treino}")]//following::button[@data-cy="btn-editar"][1]`}
    botaoSelecionarTreino = treino => {return `//h3[contains(text(),"${treino}")]//following::*[@data-cy="check-select"][1]`}
    botaoExpandirBotoesAcoes = () => {return '[data-cy="expandir-botoes"]'}
    botaoAdicionarTreino = () => {return '[data-cy="add-treino"]'}
    botaoCopiarTreino = () => {return '[data-cy="copiar-treinos"]'}
    botaoExcluirTreino = () => {return '[data-cy="excluir-treinos"]'}
    cardTreinoCliente = treino => {return `//*[@data-cy="card-treino"]//parent::*[text()="${treino}"]`}
    treinosListados = () => {return '[data-cy="card-treino"]'}
    campoNomeTreino = () => {return '[data-cy="nome-exerc"]'}
    campoDescricaoTreino = () => {return '[data-cy="desc-exerc"]'}
    campoSelecionarExercicio = () => {return '[data-cy="exercicios"]'}
    SelecionarExercicioListado = exercicio => {return `//*[@data-cy="exercicios"]//following::*[contains(text(),"${exercicio}")]`}
    campoRepsExercTreino = () => {return '[data-cy="reps"]'}
    campoSeriesExercTreino = () => {return '[data-cy="series"]'}
    campoOrdemExercTreino = () => {return '[data-cy="ordem"]'}
    botaoAdicionarExercicio = () => {return '[data-cy="btn-add-exerc"]'}
    botaoRemoverExercicio = () => {return '[data-cy="btn-remover-exerc"]'}
    campoUsuariosCopiar = () => {return '[data-cy="usuarios-copiar"]'}
    selecionarUsuarioCopiar = usuario => {return `//*[contains(text(),"${usuario}")]//preceding::*[@class="v-simple-checkbox"][1]`}
}

export default WorkoutPageElements