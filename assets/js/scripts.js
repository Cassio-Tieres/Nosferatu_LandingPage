//Menu mobile
const btnMobile = document.getElementById('hamburger');

btnMobile.addEventListener('click', () => {
    const menuMobile = document.getElementById('menu-mobile');
    menuMobile.classList.toggle('active');
});