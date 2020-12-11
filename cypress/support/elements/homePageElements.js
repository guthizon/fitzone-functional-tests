class HomeElements {
    botaoMenu = () => { return '[data-cy="btn-menu"]'};
    acessarItemMenu = menu => { return `//*[@data-cy="itens-menu"]//parent::*[contains (text(), "${menu}")]`}
    acessarItemMenuCheckin = menu => { return `//*[@data-cy="itens-menu"]//parent::*[text() = "${menu}"]`}
}

export default HomeElements;