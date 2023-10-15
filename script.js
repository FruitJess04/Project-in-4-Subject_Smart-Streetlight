document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password are correct (you should replace this with your authentication logic)
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        window.location.href = 'welcome.html';
        // Redirect to admin dashboard or perform other actions here
    } else {
        alert("Invalid username or password. Please try again.");
    }
});