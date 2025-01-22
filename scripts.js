// Dark Mode Toggle
const darkModeToggle = document.querySelector('.btn-dark-mode');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

/* CSS for Dark Mode */
document.body.classList.add('dark-mode');
