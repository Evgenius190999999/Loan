import Slider from "./slider";

export default class MiniSlider extends Slider {
    constructor(page, next, prev, activeClass, animate, autoPlay) {
        super(page, next, prev, activeClass, animate, autoPlay);
    }

    decorazeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        if (this.slides[1].tagName == 'BUTTON' && this.slides[2].tagName == 'BUTTON') {
            this.page.appendChild(this.slides[0]);
            this.page.appendChild(this.slides[1]);
            this.page.appendChild(this.slides[2]);
            this.decorazeSlides();
        } else if (this.slides[1].tagName == 'BUTTON') {
            this.page.appendChild(this.slides[0]);
            this.page.appendChild(this.slides[1]);
            this.decorazeSlides();
        } else {
            this.page.appendChild(this.slides[0]);
            this.decorazeSlides();
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== 'BUTTON') {
                    let active = this.slides[i];
                    this.page.insertBefore(active, this.slides[0]);
                    this.decorazeSlides();
                    break;
                }
            }


        });
    }

    init() {
        this.page.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.bindTriggers();
        this.decorazeSlides();
        
        if (this.autoPlay) {
            setInterval(() => this.nextSlide(), 5000);
        }
    }

}