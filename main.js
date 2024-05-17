// main.js
console.log('Script loaded');

// Header Scroll Code
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');   
}

window.onscroll = () => {
    menu.classList.remove('active');  
}