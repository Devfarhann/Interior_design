// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Simulate sending data to server (replace this with actual form submission)
    setTimeout(function() {
        alert('Your message has been sent!');
        document.getElementById('contactForm').reset(); // Clear the form
    }, 1000);
});
