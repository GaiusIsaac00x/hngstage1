function formatWithZero(num) {
    return num.toString().padStart(2, '0');
  }
  
  function displayCurrentDayAndTime() {
    const now = new Date();
    const dayOfWeek = now.getUTCDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[dayOfWeek];
    const utcHours = formatWithZero(now.getUTCHours());
    const utcMinutes = formatWithZero(now.getUTCMinutes());
    const utcSeconds = formatWithZero(now.getUTCSeconds());
    const currentDayElement = document.getElementById('currentDay');
    currentDayElement.textContent = `${currentDayOfWeek}`;
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.textContent = `${utcHours}:${utcMinutes}:${utcSeconds}`;
  }
  
  displayCurrentDayAndTime();
  setInterval(displayCurrentDayAndTime, 1000);