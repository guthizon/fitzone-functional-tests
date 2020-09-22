class ExerciciosPageElements {
    botaoNovoExercicio = () => { return '[data-cy="novo-exercicio"]'}
    campoNomeExercicio = () => { return '[data-cy="nome"]'}
    campoDescricaoExercicio = () => { return '[data-cy="descricao"]'}
    listagemExercicio = () => { return '[data-cy="lista-exercicios"]'}
    botaoEditarExercicio = exercicio => { return '[data-cy="editar-exerc"]'}
    botaoEditarExercicioEspecifico = exercicio => { return `//*[text()="${exercicio}"]//following::*[@data-cy="editar-exerc"][1]`}
    botaoExcluirExercicio = exercicio => { return `//*[text()="${exercicio}"]//following::*[@data-cy="excluir-exerc"][1]`}
    campoLocalizarExercicio = () => { return '[data-cy="localizar-exercicios"]'}
}

export default ExerciciosPageElements