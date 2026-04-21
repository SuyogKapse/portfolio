// script.js

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling navigation
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    scrollLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Contact form handler
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., using fetch API)
    alert('Form submitted!');
});

// Scroll animations
const animatedElements = document.querySelectorAll('.animate');

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -50% 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

animatedElements.forEach(element => {
    appearOnScroll.observe(element);
});