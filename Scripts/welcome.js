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
        welcomeScreen.style.opacity = '0'; // Fade out
        setTimeout(() => {
            welcomeScreen.style.display = 'none'; // Remove from view
        }, 500); // Match the duration of the opacity transition
    }, 1000); // Show for 2 seconds
});