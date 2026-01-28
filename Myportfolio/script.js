// Typing Effect
const textElement = document.getElementById('typing-text');
const phrases = ["AWS Cloud Enthusiast", "AI/ML Engineer", "Full Stack Developer"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    type();
    initEmailJS();
});

// EmailJS Configuration
function initEmailJS() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('statusMessage');
    
    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "pavantk19@gmail.com"
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        statusMessage.style.color = '#38bdf8';
        statusMessage.textContent = '✓ Message sent successfully!';
        document.getElementById('contactForm').reset();
        setTimeout(() => {
            statusMessage.textContent = '';
        }, 5000);
    }, function(error) {
        console.log('FAILED...', error);
        statusMessage.style.color = '#ff6b6b';
        statusMessage.textContent = '✗ Failed to send message. Please try again.';
    });
}

// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}
const contactForm = document.getElementById('contact-form');
const statusMessage = document.getElementById('statusMessage');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  statusMessage.textContent = "Sending...";
  statusMessage.style.color = "cyan";

  const formData = new FormData(contactForm);
  
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      statusMessage.textContent = "Message sent successfully!";
      statusMessage.style.color = "#2ecc71"; // Green
      contactForm.reset();
    } else {
      statusMessage.textContent = "Oops! Send failed. Please try again.";
      statusMessage.style.color = "#e74c3c"; // Red
    }
  } catch (error) {
    statusMessage.textContent = "Network error. Check your connection.";
    statusMessage.style.color = "#e74c3c";
  }
});