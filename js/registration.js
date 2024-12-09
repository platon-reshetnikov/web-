function registerUser() {
    const user = {
        lastName: document.getElementById('lastName').value,
        firstName: document.getElementById('firstName').value,
        middleName: document.getElementById('middleName').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        role: document.getElementById('role').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    localStorage.setItem(user.username, JSON.stringify(user));

    alert('Користувач успішно зареєстровано!');
    window.location.href = 'login.html';
}

