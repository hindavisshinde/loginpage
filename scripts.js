document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        document.getElementById('error-message').textContent = 'All fields are required.';
        return;
    }

    // Simulate an asynchronous login request
    setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
            alert('Login successful!');
        } else {
            document.getElementById('error-message').textContent = 'Invalid email or password.';
        }
    }, 1000);
});

document.getElementById('forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Please contact support for password assistance.');
});

document.getElementById('create-account').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'create-account.html';
});