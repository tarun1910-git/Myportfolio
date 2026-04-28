// Scroll Reveal
const revealItems = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(item => observer.observe(item));


// Theme Toggle
const toggleBtn = document.getElementById('themeToggle');

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');

    if(document.body.classList.contains('light')){
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
});


// Contact Form
const form = document.getElementById('contactForm');
const msg = document.getElementById('successMsg');

form.addEventListener('submit', function(e){
    e.preventDefault();

    msg.textContent = "Message sent successfully!";
    form.reset();
});