// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or respect OS preference
const savedTheme = localStorage.getItem('theme');
const osPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && osPrefersDark)) {
    htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    
    // Save preference to localStorage
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real application, you would send the form data to a server here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}