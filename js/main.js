/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
 *
 */

const app = new Vue(
    {
        el: '#app',
        data: {
            currentIndex: 0,
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
        }
    }
);


// const images = [
//     {
//         image: 'img/01.jpg',
//         title: 'Sweden',
//         text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
//     },
//     {
//         image: 'img/02.jpg',
//         title: 'Switzerland',
//         text: 'Lorem ipsum'
//     },
//     {
//         image: 'img/03.jpg',
//         title: 'United Kingdom',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
//     },
//     {
//         image: 'img/04.jpg',
//         title: 'Germany',
//         text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
//     },
//     {
//         image: 'img/05.jpg',
//         title: 'Paradise',
//         text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
//     }
// ];

// const carouselImg = document.querySelector('.my-carousel-images');
// const thumbnails = document.querySelector('.my-thumbnails');
// thumbnails.classList.add('d-flex');

// for (let i = 0 ; i < images.length ; i++){
//     carouselImg.innerHTML += `
//     <div class="main-img position-relative">
//         <img src="${images[i].image}" alt="${images[i].title}">
//         <div class="text-box position-absolute">
//             <h2 class="text-white text-end">${images[i].title}</h2>
//             <p class="text-white text-end">${images[i].text}</p>
//         </div>
//     </div>`;
//     thumbnails.innerHTML += `
//     <div class="img-wrapper d-flex">
//         <img class="img-fluid" src="${images[i].image}" alt="${images[i].title}">
//     </div>`;
//     document.querySelector('.img-wrapper').style.width = `calc(100% / ${images.length})`;
// }

// let currentIndex = 0;

// addClass('main-img', 'active');
// addClass('img-wrapper', 'active');

// let isForward = true;
// const next = document.querySelector('.my-next');
// next.addEventListener('click', function() {
//     removeClass('main-img', 'active');
//     removeClass('img-wrapper', 'active');

//     if (currentIndex == images.length - 1) {
//         currentIndex = 0;
//     } else {
//         currentIndex++;
//     }

//     addClass('main-img', 'active');
//     addClass('img-wrapper', 'active');

//     isForward = true;
// });

// const prev = document.querySelector('.my-previous');
// prev.addEventListener('click', function() {
//     removeClass('main-img', 'active');
//     removeClass('img-wrapper', 'active');

//     if (currentIndex == 0) {
//         currentIndex = images.length - 1;
//     } else {
//         currentIndex--;
//     }

//     addClass('main-img', 'active');
//     addClass('img-wrapper', 'active');
    
//     isForward = false;
// });

// let autoSlide = setInterval(function() {
//     if (isForward) {
//         next.click();
//     } else {
//         prev.click();
//     }
// }, 2000);

// function addClass(elementClassName, classToAdd) {
//     const elements = document.getElementsByClassName(elementClassName)[currentIndex];
//     elements.classList.add(classToAdd);
// }

// function removeClass(elementClassName, classToRemove) {
//     const elements = document.getElementsByClassName(elementClassName)[currentIndex];
//     elements.classList.remove(classToRemove);
// }