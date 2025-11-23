document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Simple validation animation
        loginMessage.style.color = '#e74c3c';
        loginMessage.style.opacity = '0';
        setTimeout(() => {
            if (username === 'admin' && password === 'password') {
                loginMessage.textContent = 'Login successful!';
                loginMessage.style.color = '#27ae60';
            } else {
                loginMessage.textContent = 'Invalid username or password.';
                loginMessage.style.color = '#e74c3c';
            }
            loginMessage.style.opacity = '1';
        }, 300);
    });
});
