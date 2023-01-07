const toggleButton = document.getElementById('toggle-button');
    const navList = document.getElementById('nav-list');

    toggleButton.addEventListener('click', () => {
        navList.classList.toggle('active');
    })


function menuToggle() {
    const toggleMenu = document.querySelector('.dropdown-page');
    toggleMenu.classList.toggle('active');
}