document.addEventListener('DOMContentLoaded', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Ви не авторизовані!');
        window.location.href = 'login.html';
    } else {
        displayBookings();
    }
});

function displayBookings() {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const bookingList = document.getElementById('bookingList');

    bookings.forEach(booking => {
        const listItem = document.createElement('li');
        listItem.textContent = `Клієнт: ${booking.clientName}, Телефон: ${booking.clientPhone}, Майстер: ${booking.master}, Послуга: ${booking.service}, Дата: ${booking.date}, Час: ${booking.time}`;
        bookingList.appendChild(listItem);
    });
}