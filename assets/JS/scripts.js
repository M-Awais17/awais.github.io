// Predefined credentials for demonstration (can be replaced with a database in a real application)
let users = [];

// Registration Functionality
document.getElementById('registrationForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username already exists
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        document.getElementById('registrationMessage').innerText = "Username already exists. Please choose another.";
    } else {
        // Add the new user to the users array
        users.push({ username, password });
        alert("Registration successful! You can now log in.");
        window.location.href = 'login.html'; // Redirect to login page after registration
    }
});

// Login Functionality
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to the portfolio page
        window.location.href = 'portfolio.html';
    } else {
        document.getElementById('loginMessage').innerText = "Invalid username or password.";
    }
});