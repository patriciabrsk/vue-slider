/**
 *
 *
 *
    Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue
    Bonus:
    1- al click su una thumb, visualizzare in grande l'immagine corrispondente
    2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
    3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
 *
 */

const app = new Vue(
    {
        el: '#app',
        data: {
            currentIndex: 0,
            hasAutoSlide: null,
            isForward: true,
            images: [
                {
                    image: 'img/01.jpg',
                    title: 'Sweden',
                    text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    image: 'img/02.jpg',
                    title: 'Switzerland',
                    text: 'Lorem ipsum'
                },
                {
                    image: 'img/03.jpg',
                    title: 'United Kingdom',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germany',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ]
        },
        methods: {
            prevImage() {
                if (this.currentIndex == 0) {
                    this.currentIndex = this.images.length - 1;
                } else {
                    this.currentIndex--;
                }
            },
            nextImage() {
                if (this.currentIndex == this.images.length - 1) {
                        this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
            },
            changeImage(imgIndex) {
                this.currentIndex = imgIndex;
            },
            autoSlide() {
                this.hasAutoSlide = setInterval(() => {
                    this.nextImage();
                }, 3000);
            },
            stopSlide() {
                clearInterval(this.hasAutoSlide);
                this.hasAutoSlide = null;
            }
        }
    }
);
