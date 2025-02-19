let currentIndex = 0;
const images = document.querySelectorAll('#banniere .slider img');
const totalImages = images.length;

function changeImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

setInterval(changeImage, 3000); // Change d'image toutes les 3 secondes