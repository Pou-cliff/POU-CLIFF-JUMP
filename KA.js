document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("pianoTitle");
    let letters = title.innerText.split("");
    title.innerHTML = ""; // Clear existing text

    // Create span elements for each letter
    letters.forEach((letter, index) => {
        let span = document.createElement("span");
        span.innerText = letter;
        span.classList.add(index % 2 === 0 ? "black" : "white"); // Alternate black and white
        title.appendChild(span);
    });

    // Click event to trigger animation
    title.addEventListener("click", function() {
        let spans = title.querySelectorAll("span");

        spans.forEach((span, index) => {
            setTimeout(() => {
                span.style.animation = "keyPress 0.3s ease";
            }, index * 100);

            setTimeout(() => {
                span.style.animation = "";
            }, index * 100 + 300);
        });

        // Redirect after animation completes
        setTimeout(() => {
            window.location.href = "JAJA.html"; // Update with actual home page
        }, spans.length * 150);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function createDancingNotes() {
        const notesArray = ['♪', '♫', '♬', '♩']; // Musical note symbols
        const note = document.createElement("div");
        note.classList.add("notes");
        note.innerText = notesArray[Math.floor(Math.random() * notesArray.length)];

        note.style.left = Math.random() * 100 + "vw"; 
        note.style.fontSize = Math.random() * 20 + 20 + "px"; 
        note.style.color = "black"; 

        document.getElementById("music-background").appendChild(note);

        setTimeout(() => note.remove(), 5000); // Removes after animation
    }

    setInterval(createDancingNotes, 500); // Creates a new note every 500ms
});


    const notes = document.querySelectorAll(".note");
    const lyrics = document.querySelectorAll(".lyrics span");

    notes.forEach((note, index) => {
        setTimeout(() => {
            note.style.opacity = "1";
            note.style.transform = "translateY(0)";
        }, index * 500);
    });

    lyrics.forEach((lyric, index) => {
        setTimeout(() => {
            lyric.style.opacity = "1";
            lyric.style.transform = "translateY(0)";
        }, index * 500);
    });

document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".f-clef, .time-signature, .note, .lyrics span");

    elements.forEach((el, index) => {
        el.style.animationDelay = (index * 0.2) + "s";
    });
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