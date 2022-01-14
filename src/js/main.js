"use strict";

import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Defference from './modules/differense';
import Form from './modules/forms';
import Slider from './modules/slider/slider';

window.addEventListener('DOMContentLoaded', ()  => {
    const slider = new MainSlider({btns: '.next', page: '.page'});
    slider.render();

    const moduleSlider = new MainSlider({page: '.moduleapp', btns: '.next'});
    moduleSlider.render();

    const showUpSlider = new MiniSlider({
        page: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        page: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        page: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    new Defference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();
});