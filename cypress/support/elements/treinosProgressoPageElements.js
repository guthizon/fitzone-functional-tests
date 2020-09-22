class TreinosProgressoPageElements {
    clienteProgresso = () => {return '[data-cy="user-progresso"]'}
    clienteProgressoExercicio = () => {return '//*[@data-cy="user-progresso"]//following::*[contains(text(),"Agachamento Kb")][1]'}
}

export default TreinosProgressoPageElements