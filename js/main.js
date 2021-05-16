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
// аккордеон для блока FAQ
(function () {
    var faqList = document.querySelector('.faq__list');
    if (faqList) {
        faqList.classList.remove('faq__list--nojs');
        var toggleFaqItem = function (item) {
            item.classList.toggle('faq__item--active');
        };
        faqList.addEventListener('click', function (evt) {
            var faqItem = evt.target.closest('li');
            toggleFaqItem(faqItem);
        });
    }
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
    // gallery Slider
    var gallerySlider = document.querySelector('.gallery__slider');
    // team Slider
    var teamSlider = document.querySelector('.team__slider');
    // reviews Slider
    var reviewsSlider = document.querySelector('.reviews__slider');
    var slideIndex = 1;
    // начальный индекс слайда по умолчанию
    var showSlides = function (n, elem, style) {
        var slides = elem.querySelectorAll('.slider__item');
        var slidesArray = Array.from(slides);
        if (n > slidesArray.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slidesArray.length;
        }
        slidesArray.forEach(function (item) {
            item.classList.remove(style);
        });
        slidesArray[slideIndex - 1].classList.add(style);
    };
    var setButtonsHandler = function (arr, style) {
        var leftButton = arr.querySelector('.slider__button--left');
        leftButton.addEventListener('click', function () {
            showSlides(slideIndex -= 1, arr, style);
        });
        var rightButton = arr.querySelector('.slider__button--right');
        rightButton.addEventListener('click', function () {
            showSlides(slideIndex += 1, arr, style);
        });
    };
    if (gallerySlider) {
        setButtonsHandler(gallerySlider, 'slider__item--active');
    }
    if (teamSlider) {
        setButtonsHandler(teamSlider, 'team__slider-item--active');
    }
    if (reviewsSlider) {
        setButtonsHandler(reviewsSlider, 'reviews__slider-item--active');
    }
}());