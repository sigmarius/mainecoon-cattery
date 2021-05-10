'use strict';

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

  var slideIndex = 1; // начальный индекс слайда по умолчанию

  // if (slides) {
  //   var slidesArray = Array.from(slides);

  //   var showSlides = function (n) {
  //     if (n > slidesArray.length) {
  //       slideIndex = 1;
  //     }

  //     if (n < 1) {
  //       slideIndex = slidesArray.length;
  //     }

  //     slidesArray.forEach(function (item) {
  //       item.classList.remove('slider__item--active');
  //     });

  //     slidesArray[slideIndex - 1].classList.add('slider__item--active');
  //   };
  // }

  // if (buttonLeft) {
  //   buttonLeft.addEventListener('click', function () {
  //     showSlides(slideIndex -= 1);
  //   });
  // }

  // if (buttonRight) {
  //   buttonRight.addEventListener('click', function () {
  //     showSlides(slideIndex += 1);
  //   });
  // }


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
      showSlides((slideIndex -= 1), arr, style);
    });

    rightButton.addEventListener('click', function () {
      showSlides((slideIndex += 1), arr, style);
    });
  };

  setButtonsHandler(galleryButtonLeft, galleryButtonRight, gallerySlides, 'slider__item--active');

  setButtonsHandler(teamButtonLeft, teamButtonRight, teamSlides, 'team__slider-item--active');

})();