// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const contactContainer = document.querySelector('.contact-container');
    const footer = document.querySelector('.footer');

    // Toggle dark mode class on body and relevant elements
    body.classList.toggle('dark-mode');
    navbar.classList.toggle('dark-mode');
    contactContainer.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    const inputs = document.querySelectorAll('.contact-container input, .contact-container textarea');
    inputs.forEach(input => {
        input.classList.toggle('dark-mode');
    });

    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.classList.toggle('dark-mode');
    });

    // Save the current mode to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Function to check localStorage for dark mode preference on page load
function checkDarkMode() {
    const darkModeStatus = localStorage.getItem('darkMode');

    if (darkModeStatus === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        document.querySelector('.contact-container').classList.add('dark-mode');
        document.querySelector('.footer').classList.add('dark-mode');

        const inputs = document.querySelectorAll('.contact-container input, .contact-container textarea');
        inputs.forEach(input => {
            input.classList.add('dark-mode');
        });

        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.classList.add('dark-mode');
        });
    }
}

// Call checkDarkMode function on page load
document.addEventListener('DOMContentLoaded', checkDarkMode);
