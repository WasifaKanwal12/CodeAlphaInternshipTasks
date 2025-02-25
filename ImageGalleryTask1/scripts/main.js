const images = document.querySelectorAll('.carousel-image');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

// Function to update the carousel's visible images
function updateCarousel() {
    const totalImages = images.length;
    const maxIndex = totalImages - 4; // Show 4 images at a time

    // Update the transform property to move the images
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * (25 + 10)}%)`; // 25% width + 10px margin

    // Disable buttons if at the ends
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;
}

// Next button functionality
nextBtn.addEventListener('click', () => {
    const totalImages = images.length;
    if (currentIndex < totalImages - 4) {
        currentIndex++;
        updateCarousel();
    }
});

// Prev button functionality
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Initialize the carousel
updateCarousel();
