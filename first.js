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

// Load the audio files
const hoverSound = new Audio('166186__drminky__menu-screen-mouse-over.wav');
// const clickSound = new Audio('assets/sounds/click.mp3');

// Play hover sound on elements with 'hover-sound' class
document.querySelectorAll('.hover-sound').forEach(el => {
  el.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});

// Play click sound on all clickable elements
// document.addEventListener('click', () => {
//   clickSound.currentTime = 0;
//   clickSound.play();
// });

 window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });