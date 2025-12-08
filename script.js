// Efeito de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#08f7fe" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#08f7fe",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "grab" }
    }
  },
  "retina_detect": true
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('open');
});
