document.addEventListener('DOMContentLoaded', () => {
    const darkModePreference = localStorage.getItem('darkMode');
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeMessage = document.getElementById('welcome-message');

    // Apply dark mode if it was enabled
    if (darkModePreference === 'enabled') {
        document.body.classList.add('dark-mode');
        welcomeScreen.classList.add('dark-mode');
    }

    // Check if the user is visiting for the first time
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
        // First visit
        welcomeMessage.textContent = "Welcome!";
        localStorage.setItem('hasVisited', 'true'); // Mark that the user has visited
    } else {
        // Returning visitor
        welcomeMessage.textContent = "Welcome Back!";
    }

    // Hide welcome screen after a few seconds
    setTimeout(() => {
        welcomeScreen.classList.add('fade-out'); // Add fade-out animation
        setTimeout(() => {
            welcomeScreen.style.display = 'none'; // Remove from view
        }, 1000); // Wait for the fade-out animation to finish
    }, 2000); // Show for 2 seconds
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById('welcome-screen').classList.add('fade-out');
    }, 3700);  // Delay to match the time for the welcome screen display
}