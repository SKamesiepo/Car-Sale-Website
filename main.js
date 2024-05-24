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


function fetchAd(type, containerId) {
    var formdata = new FormData();
    formdata.append("type", type);
    formdata.append("tags", "music,party");

    var ajax = new XMLHttpRequest();
    ajax.addEventListener("load", function(event) {
        var response = JSON.parse(event.target.responseText);
        var container = document.getElementById(containerId);

        if (response.link) {
            container.querySelector('.advertIMG').src = response.link;
            container.querySelector('.advertIMG').alt = response.alt;
            container.querySelector('.anchorElement').href = response.href;
            container.querySelector('.headerText').innerHTML = response.message;
        } else {
            console.error("Invalid response for ad type:", type, response);
        }
    }, false);

    ajax.addEventListener("error", function(event) {
        console.error("Error fetching ad for type:", type, event);
    }, false);

    ajax.open("POST", "https://ad.simaneka.com/api/get");
    ajax.setRequestHeader("authorisation", "tD6zol5egVkfh9Wab7Z9rtOGm9uc2IgJ");
    ajax.send(formdata);
}

document.addEventListener("DOMContentLoaded", function() {
    fetchAd("Light Square", "light-square-ad");
    fetchAd("Vertical Strip", "vertical-strip-ad");
    fetchAd("Horizontal Strip", "horizontal-strip-ad");
});