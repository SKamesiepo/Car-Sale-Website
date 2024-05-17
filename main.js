// main.js
console.log('Script loaded');

// Header Scroll Code
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
