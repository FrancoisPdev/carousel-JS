'use strict';

const nextButton = document.getElementsByClassName('nextButton');
const previousButton = document.getElementsByClassName('previousButton');
const items = document.querySelectorAll('li');
let i = 0;

function nextImage() {
    items[i].classList.remove("visible");
    i++; 
    if (i == items.length) {
    i = 0
    }
    items[i].classList.add("visible");
}

 function previousImage () {
    items[i].classList.remove("visible");
    i--;
    if (i < 0) { 
    i = 2
    }
    items[i].classList.add("visible");
}

nextButton[0].addEventListener("click", nextImage);

previousButton[0].addEventListener("click", previousImage);
