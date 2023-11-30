// import Swiper, { Navigation, Pagination } from 'swiper';
// import BurgerMenu from './modules/BurgerMenu';
// import { dropdown } from "./modules/dropdown.js";
// import { togglePopupWindows } from "./modules/togglePopup.js";

// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'

// Swiper.use([Navigation]);
// Swiper.use([Pagination]);

var employeeSwiper = new Swiper('.employee-slider', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 120,
    centeredSlides: true,
    autoplay: {
        delay: 10000,
    },
    navigation: {
        nextEl: '.employee-slider__btn-next',
        prevEl: '.employee-slider__btn-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});


/** Фиксированный header */
// headerFixed();

const togglePopupWindows = () => {
    document.addEventListener('click', ({ target }) => {
        if (target.closest('[data-type]')) {
            const popup = document.querySelector(
                `[data-popup="${target.dataset.type}"]`
            );


            // if (document.querySelector('._is-open')) {
            //   document.querySelectorAll('._is-open').forEach((modal) => {
            //     modal.classList.toggle('_is-open');
            //   });
            // }

            popup.classList.toggle('_is-open');

            // toggleBodyLock(true);
        }

        if (
            target.classList.contains('_is-open') ||
            target.closest('.button-close')
        ) {
            const popup = target.closest('._is-open');

            popup.classList.remove('_is-open');
            // toggleBodyLock(false);
        }
    });
};

const dropdown = () => {
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

const showMoreHandler = () => {
    const wrapper = document.querySelectorAll('.employee-content__article_text-wrapper');

    wrapper.forEach((item) => {
        item.addEventListener('click', (e) => {
            const show = item.querySelector('.employee-content__article_show-text');
            const isExpanded = () => item.classList.contains('active');

            if (e.target === show) {
                show.textContent = isExpanded() ? 'Развернуть' : 'Свернуть';
                item.classList.toggle('active');
            }
        })
    })
}








togglePopupWindows();
dropdown();
showMoreHandler();


