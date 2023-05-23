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