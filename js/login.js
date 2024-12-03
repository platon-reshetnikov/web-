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
}

function loginUser() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(username));

    if (user && user.password === password) {
        localStorage.setItem('currentUser', username);
        alert('Вход успешен!');
        if (user.role === 'Адміністратор') {
            window.location.href = 'admin.html';
        } else if (user.role === 'Майстер') {
            window.location.href = 'master.html';
        } else if (user.role === 'Клієнт') {
            window.location.href = 'client.html';
        }
    } else {
        alert('Невірний логін або пароль!');
    }
}