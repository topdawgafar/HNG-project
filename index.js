document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const updateTime = () => {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };

        const timeString = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const dayString = now.toLocaleDateString('en-GB', options);

        currentTimeElement.textContent = `Current Time (UTC): ${timeString}`;
        currentDayElement.textContent = `Today: ${dayString}`;
    };

    updateTime();
    setInterval(updateTime, 60000); // Update every minute
});