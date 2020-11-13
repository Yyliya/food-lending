    import tabs  from './modules/tabs';
    import modal  from './modules/modal';
    import timer  from './modules/timer';
    import cards  from './modules/cards';
    import calc  from './modules/calc';
    import forms  from './modules/forms';
    import slider  from './modules/slider';
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2020-12-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider();
});
