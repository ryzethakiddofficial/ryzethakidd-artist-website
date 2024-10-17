// Array of cover art images
const coverArts = [
    '../Images/Discography/healing-wounds.jpg',
    '../Images/Discography/patient-zero.jpg',
    '../Images/Discography/is-this-a-dream.jpg'
];

let currentIndex = 0;
let idleTime = 0;
let idleInterval;

// Function to show the cover art
function showCoverArt() {
    const overlay = document.getElementById('overlay');
    const coverArt = document.getElementById('cover-art');

    overlay.style.display = 'flex'; // Show overlay
    coverArt.src = coverArts[currentIndex]; // Set cover art source
    coverArt.style.opacity = 1; // Fade in cover art

    // Cycle through covers every 5 seconds
    setTimeout(() => {
        coverArt.style.opacity = 0; // Fade out cover art

        currentIndex = (currentIndex + 1) % coverArts.length; // Update index
        setTimeout(showCoverArt, 500); // Wait before showing next cover art
    }, 5000); // Display each cover for 5 seconds
}

// Increment the idle time counter
function timerIncrement() {
    idleTime++;
    if (idleTime >= 60) { // If user is idle for 60 seconds
        showCoverArt();
        clearInterval(idleInterval); // Stop checking once idle screen is shown
    }
}

// Reset idle time on any user activity
function resetIdleTime() {
    idleTime = 0; // Reset the idle time
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Hide overlay when user is active
}

// Start the idle timer after the welcome screen is hidden
window.onload = function() {
    // Assuming your welcome screen fades out over 1 second
    setTimeout(() => {
        idleTime = 0; // Reset idle time when the welcome screen is cleared
        idleInterval = setInterval(timerIncrement, 1000); // Start the idle timer
    }, 1000); // Delay the start of the timer (1 second for example)
}

// Event listeners for user activity
document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keypress', resetIdleTime);
document.addEventListener('click', resetIdleTime);
document.addEventListener('scroll', resetIdleTime); // Optional: reset on scroll