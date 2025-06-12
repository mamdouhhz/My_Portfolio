particlesJS('particles-js', {
    particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: '#ffd700' },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 180, color: '#ffd700', opacity: 0.4, width: 1 },
    move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
    },
    },
    interactivity: {
    detect_on: 'canvas',
    events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
    },
    modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 },
    },
    },
    retina_detect: true,
});

// Toggle resume sections
document.querySelectorAll('.resume-section h3').forEach(header => {
    header.addEventListener('click', () => {
    const section = header.parentElement;
    section.classList.toggle('active');
    });
});

document.getElementById('navToggle').addEventListener('click', function () {
document.getElementById('navLinks').classList.toggle('active');
});