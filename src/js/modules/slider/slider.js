export default class Slider {
    constructor({page = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = "",
        animate,
        autoPlay } = {}){
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate; 
        this.autoPlay = autoPlay;
        this.slideIndex = 1;
    }

}