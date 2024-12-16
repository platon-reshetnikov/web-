function registerUser() {
    // Получаем значения полей
    const lastName = document.getElementById('lastName').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const address = document.getElementById('address').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const role = document.getElementById('role').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Проверка заполненности всех полей
    if (!lastName || !firstName || !middleName || !address || !phone || !dob || !role || !username || !password) {
        alert('Будь ласка, заповніть усі поля!');
        return;
    }

    // Валидация имени и фамилии: только буквы
    const nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    if (!nameRegex.test(lastName) || !nameRegex.test(firstName) || !nameRegex.test(middleName)) {
        alert('Ім\'я, прізвище та по батькові повинні містити лише літери.');
        return;
    }

    // Валидация телефона: только цифры, длина 10 символов
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Номер телефону повинен містити рівно 10 цифр.');
        return;
    }

    // Валидация даты рождения: корректный формат
    if (!isValidDate(dob)) {
        alert('Дата народження має бути у форматі YYYY-MM-DD.');
        return;
    }

    // Валидация логина: минимум 4 символа, без пробелов
    if (username.length < 4 || username.includes(' ')) {
        alert('Логін повинен містити принаймні 4 символи і не містити пробілів.');
        return;
    }

    // Валидация пароля: минимум 6 символов
    if (password.length < 6) {
        alert('Пароль повинен містити принаймні 6 символів.');
        return;
    }

    // Создаём объект пользователя
    const user = {
        lastName: lastName,
        firstName: firstName,
        middleName: middleName,
        address: address,
        phone: phone,
        dob: dob,
        role: role,
        username: username,
        password: password
    };

    // Сохраняем пользователя в localStorage
    localStorage.setItem(user.username, JSON.stringify(user));

    alert('Користувач успішно зареєстровано!');
    window.location.href = 'login.html';
}

// Функция проверки даты на валидность
function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/; // Проверка формата YYYY-MM-DD
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    return date instanceof Date && !isNaN(date);
}



