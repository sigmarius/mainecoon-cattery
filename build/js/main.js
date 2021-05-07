'use strict';
// утилитарный модуль - экспортирует общие функции и переменные для всех модулей
(function () {
    window.utils = {
        KeyCode: {
            BACKSPACE: 'Backspace',
            ESCAPE: 'Escape'
        }
    };
}());
// мобильное меню - начиная с планшетной версии
(function () {
    var pageHeader = document.querySelector('.page-header');
    var headerToggle = document.querySelector('.page-header__toggle');
    if (pageHeader && headerToggle) {
        pageHeader.classList.remove('page-header--nojs');
        headerToggle.addEventListener('click', function () {
            if (pageHeader.classList.contains('page-header--closed')) {
                pageHeader.classList.remove('page-header--closed');
                pageHeader.classList.add('page-header--opened');
            } else {
                pageHeader.classList.add('page-header--closed');
                pageHeader.classList.remove('page-header--opened');
            }
        });
    }
}());
// слайдер изображений для секции gallery
(function () {
    var slides = document.querySelectorAll('.slider__item');
    var buttonLeft = document.querySelector('.slider__button--left');
    var buttonRight = document.querySelector('.slider__button--right');
    var slideIndex = 1;
    // начальный индекс слайда по умолчанию
    if (slides) {
        var slidesArray = Array.from(slides);
        var showSlides = function (n) {
            if (n > slidesArray.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slidesArray.length;
            }
            slidesArray.forEach(function (item) {
                item.classList.remove('slider__item--active');
            });
            slidesArray[slideIndex - 1].classList.add('slider__item--active');
        };
    }
    if (buttonLeft) {
        buttonLeft.addEventListener('click', function () {
            showSlides(slideIndex -= 1);
        });
    }
    if (buttonRight) {
        buttonRight.addEventListener('click', function () {
            showSlides(slideIndex += 1);
        });
    }
}());