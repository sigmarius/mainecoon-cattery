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
    var gallerySlides = document.querySelectorAll('.gallery__slider-item');
    var galleryButtonLeft = document.querySelector('.gallery__button-left');
    var galleryButtonRight = document.querySelector('.gallery__button-right');
    // team Slider
    var teamSlides = document.querySelectorAll('.team__slider-item');
    var teamButtonLeft = document.querySelector('.team__button-left');
    var teamButtonRight = document.querySelector('.team__button-right');
    var slideIndex = 1;
    // начальный индекс слайда по умолчанию
    var showSlides = function (n, arr, style) {
        var slidesArray = Array.from(arr);
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
    var setButtonsHandler = function (leftButton, rightButton, arr, style) {
        leftButton.addEventListener('click', function () {
            showSlides(slideIndex -= 1, arr, style);
        });
        rightButton.addEventListener('click', function () {
            showSlides(slideIndex += 1, arr, style);
        });
    };
    if (gallerySlides && galleryButtonLeft && galleryButtonRight) {
        setButtonsHandler(galleryButtonLeft, galleryButtonRight, gallerySlides, 'slider__item--active');
    }
    if (teamSlides && teamButtonLeft && teamButtonRight) {
        setButtonsHandler(teamButtonLeft, teamButtonRight, teamSlides, 'team__slider-item--active');
    }
}());