// Particle Effect Initialization
particlesJS.load('particles-js', 'path/to/particles-config.json', function() {
    console.log('Particles.js loaded!');
});

// Scroll Reveal
document.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible');
        }
    }
});

// Menu Toggle Example
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('open');
});

// Example Loader Display
window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
});
