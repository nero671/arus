export const dropdown = () => {
    const goodCatalogFilters = document.querySelector('.menu-header__wrapper');
    const headerUser = document.querySelector('.header-user.js-dropdown');

    // document.body.addEventListener('click', (e) => {
    //     console.log(e.target)
    //     if(e.target.closest('.js-dropdown')) {
    //         e.target.classList.toggle('active');
    //     }
    // });

    headerUser.addEventListener('click', (e) => {
        headerUser.classList.toggle('active');
    });

    goodCatalogFilters.addEventListener('click', (e) => {
        if (e.target.matches('.menu-dropdown')) {
            const dropdowns = goodCatalogFilters.querySelectorAll('.menu-dropdown');
            const targetDropdown = e.target;

            const isActive = targetDropdown.classList.contains('active');

            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove('active');
            });

            if (!isActive) {
                targetDropdown.classList.add('active');
            }
        }
    });

}

