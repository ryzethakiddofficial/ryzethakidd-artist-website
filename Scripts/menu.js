document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const leftMenu = document.getElementById('leftMenu');

    menuToggle.addEventListener('click', () => {
        leftMenu.classList.toggle('open'); // Toggle the 'open' class
    });

    // Close the menu when clicking on a menu item
    const menuItems = leftMenu.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu(); // Close the menu
        });
    });
});

function closeMenu() {
    const leftMenu = document.getElementById('leftMenu');
    leftMenu.classList.remove('open'); // Close the menu
}
