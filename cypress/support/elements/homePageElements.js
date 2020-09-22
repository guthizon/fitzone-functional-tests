class HomeElements {
    botaoMenu = () => { return '[data-cy="btn-menu"]'};
    acessarItemMenu = menu => { return `//*[@data-cy="itens-menu"]//following::*[contains (text(), "${menu}")]`}
}

export default HomeElements;