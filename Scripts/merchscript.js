// merchscript.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select all navigation buttons for merchandise categories
    document.querySelectorAll('.nav-btn').forEach(button => {
        // Add a click event listener to each button
        button.addEventListener('click', () => {
            // Get the data-target attribute value of the clicked button
            const target = button.getAttribute('data-target');

            // Loop through all product sections and hide them by removing the 'active' class
            document.querySelectorAll('.product-section').forEach(section => {
                section.classList.remove('active');
            });

            // Show the targeted product section by adding the 'active' class
            document.getElementById(target).classList.add('active');

            // Loop through all navigation buttons and remove the 'active' class
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add the 'active' class to the clicked button to highlight it
            button.classList.add('active');
        });
    });
});
