// Dark Mode Toggle
const darkModeButton = document.getElementById('toggle-dark-mode');

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    darkModeButton.textContent =
        document.body.classList.contains('light-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
