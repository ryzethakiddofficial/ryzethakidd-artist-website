document.addEventListener('DOMContentLoaded', () => {
    // Get the menu toggle button and the left menu
    const menuToggle = document.getElementById('menuToggle');
    const leftMenu = document.getElementById('leftMenu');

    // Toggle the left menu when the menu button is clicked
    menuToggle.addEventListener('click', () => {
        leftMenu.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
    });

    // Close the menu when clicking on any menu item
    const menuItems = leftMenu.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu(); // Call closeMenu function when a menu item is clicked
        });
    });
});

// Function to close the left menu
function closeMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.remove('open'); // Remove the 'open' class to hide the menu
}