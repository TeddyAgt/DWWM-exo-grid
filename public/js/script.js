// Gestion du curseur personnalisé
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
}

// Lancement du son
const audio = document.querySelector("audio");

audio.play();
let isMusicPlaying = true;

// Gestion de l'arrêt du son
const audioToggler = document.querySelector(".audio-toggler");

audioToggler.addEventListener("click", (e) => {
    isMusicPlaying = !isMusicPlaying;
    toggleMusic(e);
});

function toggleMusic(e) {
    if (isMusicPlaying) {
        audio.play();
        e.target.ariaLabel = "Stopper la musique";
        e.target.innerHTML =
            '<i class="fa-solid fa-volume-xmark c222" aria-hidden="true"></i>';
    } else {
        audio.pause();
        e.target.ariaLabel = "Jouer la musique";
        e.target.innerHTML =
            '<i class="fa-solid fa-volume-low c222" aria-hidden="true"></i>';
    }
}
