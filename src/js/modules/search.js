const search = () => {
    const header = document.querySelector('.header');

    const openBtn = header?.querySelector('.header-search-mob');
    const closeBtn = header?.querySelector('.icon-search-menu__wrapper');
    const input = header?.querySelector('.search-box__input');

    openBtn?.addEventListener('click', () => {
        header.classList.add('search-box-open');
    });

    closeBtn?.addEventListener('click', () => {
        header.classList.remove('search-box-open');
        input.value = ''
    });

    input?.addEventListener('input', () => {
        if (input.value !== '') {
            header.classList.add('search-box-dropdown-show');
            document.body.classList.add('lock');
        } else {
            header.classList.remove('search-box-dropdown-show');
            document.body.classList.remove('lock');
        }
    });

}

export default search;
