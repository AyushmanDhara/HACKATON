// JavaScript for Cycling Ads
let adContainers = document.querySelectorAll('.ad-images');

adContainers.forEach(container => {
    let images = container.querySelectorAll('img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }, 3000); // Change image every 3 seconds
});
// List of URLs to navigate to
const urls = [
    "Suggest_Hospital.html",
];

document.getElementById("Suggest Hospital").addEventListener("click", function() {
    // Replace 'your-page.html' with the URL or page you want to open
    window.location.href = 'Suggest_Hospital.html';
});

