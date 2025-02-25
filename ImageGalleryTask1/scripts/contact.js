// JavaScript code for handling form submission and displaying success modal

document.addEventListener('DOMContentLoaded', function() {
    // Access the form and success modal elements
    const contactForm = document.getElementById('contactForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    
    // Add an event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way (page reload)
        
        // Show the success modal
        successModal.show();
        
        // Optionally, clear the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        
        // Hide the modal after 2 seconds (2000 milliseconds)
        setTimeout(function() {
            successModal.hide();
        }, 2000); // 2000 milliseconds = 2 seconds
    });
});
