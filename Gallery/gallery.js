let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// Function to move to the next slide
function moveNext() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
}

// Function to move to the previous slide
function movePrev() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
}

// Event listeners for button navigation
next.addEventListener('click', moveNext);
prev.addEventListener('click', movePrev);

// Automatically move to the next slide every 3 seconds
let autoSlide = setInterval(moveNext, 3000);

// Stop the auto-slide when hovering over buttons to avoid conflicts
document.querySelector('.button').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
document.querySelector('.button').addEventListener('mouseleave', () => {
    autoSlide = setInterval(moveNext, 3000);
});



window.addEventListener("load", function () {
const loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "none";
});

