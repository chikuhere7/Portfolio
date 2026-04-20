// 1. Navbar Scroll Effect (Scroll karne par background dark karna)
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Icon change karna (Hamburger to Cross)
    if (navLinks.classList.contains('active')) {
        mobileMenu.classList.replace('fa-bars', 'fa-times');
    } else {
        mobileMenu.classList.replace('fa-times', 'fa-bars');
    }
});

// 3. Simple Intersection Observer (Scroll Reveal Animation)
// Interviewer ko bolna: "Performance ke liye maine Intersection Observer API use kiya hai."
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

hiddenElements.forEach((el) => observer.observe(el));

// 4. Simple Typewriter Effect
const words = ["Java full stack Developer", "Backend Developer", "Spring Boot Learner", 
    "Problem Solver", 
    "Java Developer", 
    "Frontend Developer",
    "Modern Web Experiences"
];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typewriterElement = document.getElementById('typewriter');

function typeEffect() {
    currentWord = words[wordIndex];
    
    // Type or Delete letters
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;
    }

    // Determine typing speed
    let speed = isDeleting ? 50 : 150;

    // Word complete hone par rukna
    if (!isDeleting && letterIndex === currentWord.length) {
        speed = 2000; // 2 seconds pause before deleting
        isDeleting = true;
    } 
    // Delete hone ke baad naya word shuru karna
    else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500; // Pause before typing new word
    }

    setTimeout(typeEffect, speed);
}

// Start Typewriter
setTimeout(typeEffect, 1000);