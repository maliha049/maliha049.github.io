const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Your message was sent successfully!");
    location.reload();
});