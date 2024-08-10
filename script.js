//Carrucel
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const intervalTime = 4000; // 3000ms = 3 segundos
let autoSlide = setInterval(nextSlide, intervalTime);
function showSlide(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Pausar el autoSlide cuando el usuario interactúa con los controles
document.querySelector('.carousel').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

document.querySelector('.carousel').addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, intervalTime);
});




// Función para abrir el modal
function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = image.src;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Añadir evento onclick a todas las imágenes en la galería
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".carousel-item img");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            openModal(image);
        });
    });
});

var w = 0;
var images = [];

document.addEventListener("DOMContentLoaded", function() {
    images = document.querySelectorAll(".carousel-item img");
    
    images.forEach(function(image, index) {
        image.addEventListener("click", function() {
            W = index;
            openModal(image);
        });
    });
});

function openModal(image) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = image.src;
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;
    
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    var modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentIndex].src;
}

