document.addEventListener("DOMContentLoaded", function() {
    const images = Array.from(document.querySelectorAll(".gallery img"));
    let currentIndex = 0;



    // Show the current image
    images[currentIndex].classList.add("current");





    // Function to handle key events
    function handleKeyEvents(event) {
        if (event.keyCode === 37) {
            // Left arrow key
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        } else if (event.keyCode === 39) {
            // Right arrow key
            currentIndex = (currentIndex + 1) % images.length;
        }

        // Update image visibility
        images.forEach(function(image) {
            image.classList.remove("current");
        });
        images[currentIndex].classList.add("current");
    }

    // Add event listener for keydown events
    document.addEventListener("keydown", handleKeyEvents);
});



let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

// Initial slide
function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

startSlide();