document.addEventListener("DOMContentLoaded", function() {
    let heartElement = document.querySelector(".heart"); // Select the heart element by class

    if (heartElement) {
        heartElement.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "index.html"; // Redirect to home page
        });
    } else {
        console.error("Element with class 'heart' not found.");
    }
});

window.addEventListener("load", function() {
    let audio = document.getElementById("bgMusic");
    audio.volume = 0.8; 

    let playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked. Waiting for user action...");
            document.addEventListener("click", function() {
                audio.play();
            }, { once: true });
        });
    }
});

function createPuso() {
    const puso = document.createElement("div");
    puso.innerHTML = "&#10084;"; // Unicode for ♥ (heart symbol)
    puso.classList.add("puso");

    // Set random position: left, right, or center
    const positionX = Math.random() * 100; // Random width percentage
    puso.style.left = positionX + "vw";
    puso.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2-5s duration

    document.getElementById("heart-container").appendChild(puso);

    // Remove puso after animation
    setTimeout(() => {
        puso.remove();
    }, 5000);
}

// Generate puso at random intervals
setInterval(createPuso, 300);
