/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый (не вызванный) код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
import {
    isWebp,
    headerFixed,
    togglePopupWindows,
    addTouchClass,
    addLoadedClass,
    setEqualCardHeight
} from './modules';

import {collectionImgWrapper, collectionNav, collectionNavItem} from "./helpers/elementsNodeList.js";
import Swiper, { Navigation, Pagination } from 'swiper';
import BurgerMenu from './modules/BurgerMenu';
import search from './modules/search';
import { catalogMenu } from './modules/catalogMenu';
import { formValidation } from './modules/validationForm';
import { dropdown } from "./modules/dropdown.js";
import { favorite } from "./modules/fav.js";
import { tabs } from "./modules/tabs.js";
import { pagination } from "./modules/pagination.js";
import rangeSlider from "./modules/rangeSlider.js";
import { customSelect } from "./modules/customSelect.js";
import { togglePassword } from "./modules/togglePass.js";


// import { MousePRLX } from './libs/parallaxMouse'

// import AOS from 'aos'


Swiper.use([Navigation]);
Swiper.use([Pagination]);

var employeeSwiper = new Swiper('.employee-slider', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 120,
    centeredSlides: true,
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

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
 ! (i) необходимо для корректного отображения webp из css
 */
// isWebp();

/* Добавление класса touch для HTML если браузер мобильный */
// addTouchClass();

/* Добавление loaded для HTML после полной загрузки страницы */
// addLoadedClass();

/* Модуль для работы с меню (Бургер) */
new BurgerMenu().init();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();

/** Параллакс мышей */
// const mousePrlx = new MousePRLX({});

/** Фиксированный header */
// headerFixed();

/**
 *  Открытие/закрытие модальных окон
 * Чтобы модальное окно открывалось и закрывалось
 * На окно повешай атрибут data-popup="<название окна>"
 * И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

 * На обертку(враппер) окна добавь класс _overlay-bg
 * На кнопку для закрытия окна добавь класс button-close
 */
togglePopupWindows();
dropdown();




tabs(collectionNav, collectionNavItem, collectionImgWrapper);


