class MeusTreinosElements {
    botaoCheckinTreino = treino => { return `//*[contains(text(),'${treino}')]//following-sibling::button[@data-cy='btn-checkin'][1]`}
    botaoCheckin = () => { return `//button[@data-cy='btn-checkin']`}
}

export default MeusTreinosElements;