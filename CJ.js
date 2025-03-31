document.querySelectorAll('.coin').forEach(coin => {
    coin.addEventListener('click', () => {
        window.location.href = coin.getAttribute('data-link');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("clickText").addEventListener("click", function() {
        this.style.color = "#FFD700"; 
        window.location.href = "I.html";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("score").addEventListener("click", function() {
        this.style.color = "#FFD700"; 
        window.location.href = "18TH.html";
    });
});
document.addEventListener("keydown", function(event) {
    let pou = document.getElementById("pou");
    let left = parseInt(window.getComputedStyle(pou).getPropertyValue("left"));

    if (event.key === "ArrowRight") {
        pou.style.left = left + 30 + "px";
    } else if (event.key === "ArrowLeft") {
        pou.style.left = left - 10 + "px";
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
// Check if a start time exists in localStorage, otherwise set the current time
let startTime = localStorage.getItem("startTime");

if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("startTime", startTime);
}

function updateTimer() {
    let elapsedTime = Math.floor((Date.now() - parseInt(startTime)) / 1000); 
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = elapsedTime % 60;

    let timeString = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;

    document.getElementById("timer").innerText = timeString;
}

// Update the timer every second
setInterval(updateTimer, 1000);
updateTimer();