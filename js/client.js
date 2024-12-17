document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('time');
    const masterSelect = document.getElementById('master');

    masterSelect.addEventListener('change', updateAvailableTimes);
    dateInput.addEventListener('change', updateAvailableTimes);

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const clientName = document.getElementById('clientName').value;
        const clientPhone = document.getElementById('clientPhone').value;
        const master = document.getElementById('master').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        
        const conflictingBooking = bookings.find(booking => booking.date === date && booking.time === time && booking.master === master);

        if (conflictingBooking) {
            alert('Цей тимчасовий слот уже зайнятий. Будь ласка, виберіть інший час.');
            return;
        }

        const booking = { 
            clientName, 
            clientPhone, 
            master, 
            service, 
            price: service.split(' - ')[1], 
            date, 
            time 
        };

        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        alert('Бронювання успішно створено!'); // Оповещение об успешной записи

        // Переход на index.html
        window.location.href = 'index.html';
    });

    function updateAvailableTimes() {
        const selectedDate = dateInput.value;
        const selectedMaster = masterSelect.value;

        if (!selectedDate || !selectedMaster) {
            timeSelect.innerHTML = '<option value="" disabled selected>Выберите время</option>';
            return;
        }

        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        const bookedTimes = bookings
            .filter(booking => booking.date === selectedDate && booking.master === selectedMaster)
            .map(booking => booking.time);

        const allTimes = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
        const availableTimes = allTimes.filter(time => !bookedTimes.includes(time));

        timeSelect.innerHTML = '<option value="" disabled selected>Выберите время</option>';
        availableTimes.forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    }
});
