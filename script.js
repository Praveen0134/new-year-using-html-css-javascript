function updateCountdown() {
    const now = new Date();
    const newYear = new Date(`January 1, ${now.getFullYear() + 1} 00:00:00`);
    const timeDifference = newYear - now;

    if (timeDifference <= 0) {
        document.getElementById('timer').style.display = 'none';
        document.getElementById('message').classList.remove('hidden');
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the countdown immediately
