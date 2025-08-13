// Script for toggling transparent background of navbar upon scrolling past hero section
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
         nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Script for toggling link underlining on current section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // adjust for nav height
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Script for toggling mobile menu
const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
});

// Script for fade-in/fade-out scrolling to sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2, // 20% of element visible triggers animation
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
    } else {
        entry.target.classList.remove('visible');
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


