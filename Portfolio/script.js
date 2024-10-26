document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    let valid = true;

    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        document.getElementById('nameError').textContent = 'Full name is required.';
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email.';
            valid = false;
        }
    }

    // Validate Message
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        valid = false;
    }

    // If valid, you can submit the form or perform further actions
    if (valid) {
        // Form is valid, submit or do further processing here
        alert('Form submitted successfully!');
    }
});
