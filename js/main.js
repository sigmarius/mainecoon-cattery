'use strict';
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
// табы для секции с Галереей
(function () {
    var tabLinks = document.querySelectorAll('.gallery__tabs-menu label');
    var tabItems = document.querySelectorAll('.gallery__tabs-item');
    var linksArray = Array.from(tabLinks);
    if (linksArray && tabItems) {
        for (var i = 0; i < linksArray.length; i++) {
            linksArray[i].addEventListener('click', function (evt) {
                for (var j = 0; j < tabItems.length; j++) {
                    tabItems[j].classList.remove('gallery__tabs-item--active');
                }
                var index = linksArray.indexOf(evt.target);
                tabItems[index].classList.add('gallery__tabs-item--active');
            });
        }
    }
}());