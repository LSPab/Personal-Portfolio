document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');
    const content = document.querySelector('.content');
    const body = document.body;

    // Toggle menu when hamburger is clicked
    hamMenu.addEventListener('click', function () {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        content.classList.toggle('blur');
        body.classList.toggle('menu-open');
    });

    // Close menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.off-screen-menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
            content.classList.remove('blur');
            body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    content.addEventListener('click', function () {
        if (offScreenMenu.classList.contains('active')) {
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
            content.classList.remove('blur');
            body.classList.remove('menu-open');
        }
    });

    // Adjust for orientation changes
    window.addEventListener('resize', function () {
        if (window.innerWidth > 767 && offScreenMenu.classList.contains('active')) {
            hamMenu.classList.remove('active');
            offScreenMenu.classList.remove('active');
            content.classList.remove('blur');
            body.classList.remove('menu-open');
        }
    });
});