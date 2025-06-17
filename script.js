// Define variables
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// This sets the progress bar when the song is loaded.
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    // If clicked on pause, make it the play icon
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else { // If clicked on play, make it the pause icon.
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

// If the song is playing, update the current time for the progress bar
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500); // Do the update every 500ms
}

progress.onchange = function () {
    // Start playing the song wherever on the progress bar is clicked
    song.play();
    song.currentTime = progress.value;

    // Update the pause/play icon
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

