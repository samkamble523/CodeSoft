document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = ''; // Clear previous error message

    // Form validation logic here (e.g., check if password is valid)
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        errorMessage.innerHTML = 'Password must be at least 6 characters long.';
        return;
    }

    // If no errors, you can submit the form or show success message
    alert('Form submitted successfully!');
});
