const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check valid email
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check password strength
function isStrongPassword(password) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return re.test(password);
}

// Suggest random strong password
function generateStrongPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 10; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    return pass;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();

    // Username
    if (usernameVal === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }

    // Email
    if (emailVal === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(emailVal)) {
        showError(email, 'Enter a valid email address in abc@gmail form');
    } else {
        showSuccess(email);
    }

    // Password
    if (passwordVal === '') {
        showError(password, 'Password is required');
    } else if (!isStrongPassword(passwordVal)) {
        showError(password, 'Password must be at least 8 characters and include uppercase, lowercase, number, and symbol');
        alert(`💡 Suggested strong password: ${generateStrongPassword()}`);
    } else {
        showSuccess(password);
    }

    // Confirm password
    if (password2Val === '') {
        showError(password2, 'Confirm password is required');
    } else if (passwordVal !== password2Val) {
        showError(password2, 'Passwords do not match');
    } else {
        showSuccess(password2);
    }
});
