class RelatoriosPageElements {
    campoDataInicial = () => {return '[data-cy="data-inicial"]'}
    campoDataFinal = () => {return '[data-cy="data-final"]'}
    checkAgrupar = () => {return '[data-cy="agrupar"]'}
    campoUsuarios = () => {return '[data-cy="usuarios"]'}
    botaoExecutar = () => {return '[data-cy="executar"]'}
    campoTotalCheckins = total => {return `//*[contains(text(),"Total de Checkins:")]//following::*[contains(text(),"${total}")][1]`}
}

export default RelatoriosPageElements