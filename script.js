function showProducts() {
    alert("Redirecting to the full product catalog...");
    window.location.href = "#products";
}

function showGallery() {
    alert("Loading more gallery images...");
    // Simulate loading new images (this can be expanded later)
    let gallery = document.querySelector(".gallery-grid");
    let newImage = document.createElement("div");
    newImage.classList.add("gallery-item");
    newImage.innerHTML = '<img src="gallery2.jpg" alt="More Woodwork"><h3>Additional Designs</h3>';
    gallery.appendChild(newImage);
}
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".carousel-item");
    let index = 0;

    function showNextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(showNextSlide, 3000); // Change image every 3 seconds
});

let currentIndex = 0;
const items = document.querySelectorAll(".gallery-item");

function moveSlide(step) {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + step + items.length) % items.length;
    items[currentIndex].classList.add("active");
}
function buyNow() {
    // Show alert message
    alert("Thank you for buying! Your order has been placed.");

    // Trigger confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

