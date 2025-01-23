// Toggle Dark Mode
const themeCheckbox = document.getElementById('theme-checkbox');
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Start Animation for VPN Diagram
const startAnimation = () => {
    const steps = document.querySelectorAll('.diagram-node, .tunnel, .step-description');
    let delay = 0;

    steps.forEach((step) => {
        setTimeout(() => {
            step.classList.add('active');
        }, delay);
        delay += 1000; // Delay between each step
    });
};

// Add Event Listener to Start Button
const startButton = document.getElementById('start-animation');
startButton.addEventListener('click', startAnimation);
