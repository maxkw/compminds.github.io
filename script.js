document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle dropdown menu visibility on small screens
    menuToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});
