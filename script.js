// Desenvolvedor Isaac Ikawa

const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        nav.classList.add('hidden');
        logo.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
        logo.classList.remove('hidden');
    }
});

document.addEventListener('mousemove', function(e) {
    const particleContainer = document.querySelector('.particle-container');
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 500); // Remove a partícula após 0.5 segundos
});