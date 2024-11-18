// Array of cover art images
const coverArts = [
    '../Images/Discography/healing-wounds.jpg',
    '../Images/Discography/patient-zero.jpg',
    '../Images/Discography/is-this-a-dream.jpg'
];

let currentIndex = 0;
let idleTime = 0;
let idleInterval;
let isShowingCoverArt = false; // Flag to track if cover art is being displayed

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

        // Wait before updating the index and showing the next cover
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % coverArts.length; // Update index
            if (isShowingCoverArt) showCoverArt(); // Show next cover art only if still idle
        }, 500); // Wait for fade-out to complete
    }, 5000); // Display each cover for 5 seconds
}

// Function to start showing cover arts and pause the idle timer
function startIdleScreen() {
    if (!isShowingCoverArt) { // Only show cover art if not already showing
        isShowingCoverArt = true; // Mark as showing cover art
        showCoverArt(); // Start showing cover art
    }
}

// Increment the idle time counter
function timerIncrement() {
    idleTime++;
    if (idleTime >= 60 && !isShowingCoverArt) { // If idle for 60 seconds and cover art is not showing
        startIdleScreen();
    }
}

// Reset idle time on any user activity
function resetIdleTime() {
    if (isShowingCoverArt) { // If cover art is showing, stop it
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none'; // Hide overlay
        isShowingCoverArt = false; // Reset flag
    }
    idleTime = 0; // Reset the idle time
}

// Start the idle timer after the welcome screen is hidden
window.onload = function() {
    // Assuming your welcome screen fades out over 1 second
    setTimeout(() => {
        idleTime = 0; // Reset idle time when the welcome screen is cleared
        idleInterval = setInterval(timerIncrement, 1000); // Start the idle timer, increment every 1 second
    }, 1000); // Delay the start of the timer (1 second for example)
}

// Event listeners for user activity
document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keypress', resetIdleTime);
document.addEventListener('click', resetIdleTime);
document.addEventListener('scroll', resetIdleTime); // Optional: reset on scroll