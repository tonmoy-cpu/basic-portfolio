function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleString('en-US', options);
}
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name.length < 2) {
        formStatus.textContent = 'Name must be at least 2 characters long';
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formStatus.textContent = 'Please enter a valid email address';
        return;
    }
    
    if (message.length < 10) {
        formStatus.textContent = 'Message must be at least 10 characters long';
        return;
    }

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'tonmoymukherjee31@gmail.com'
    };

    emailjs.send('service_xm5fzxt', 'template_z020el7', templateParams)
        .then(function(response) {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = '#4b6cb7';
            form.reset();
            setTimeout(() => formStatus.textContent = '', 5000); 
        }, function(error) {
            formStatus.textContent = 'Failed to send message. Please try again.';
            formStatus.style.color = '#ff4444';
            console.error('EmailJS error:', error);
        });
});


const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

updateDateTime();
setInterval(updateDateTime, 1000);