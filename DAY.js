function startConfetti() {
    confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.6 }
    });
}

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

    // Start confetti effect automatically when the page loads
    setInterval(() => {
        confetti({
            angle: 90, // Confetti falls from the top
            spread: 190,
            particleCount: 250,
            origin: { x: 0.5, y: 0 } // Starts from the center top
        });
    }, 1000);
});

// Function to go back home when the button is clicked
function goHome() {
    window.location.href = "JAJA.html"; // Change this to your homepage link
}
