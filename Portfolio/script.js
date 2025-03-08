// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeToggle.classList.toggle('fa-sun');
    themeToggle.classList.toggle('fa-moon');
});

// Toggle Menu for Mobile
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}