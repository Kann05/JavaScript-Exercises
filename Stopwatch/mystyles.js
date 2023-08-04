const timer = () => {
  const buttonElement = document.querySelector('#start');
  const hoursElement = document.querySelector('#hours');
  const minutesElement = document.querySelector('#minutes');
  const secondsElement = document.querySelector('#seconds');
  const resetElement = document.querySelector('#reset');
  const pauseElement = document.querySelector('#pause');

  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let timerInterval;

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const updateTimer = () => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    const formattedHours = formatTime(hours);
    const formattedMinutes = formatTime(minutes);
    const formattedSeconds = formatTime(seconds);

    hoursElement.innerHTML = formattedHours + ':';
    minutesElement.innerHTML = formattedMinutes + ':';
    secondsElement.innerHTML = formattedSeconds;
  };

  const startTimer = () => {
    timerInterval = setInterval(updateTimer, 1000);
  };

  const resetTimer = () => {
    clearInterval(timerInterval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    hoursElement.innerHTML = '00:';
    minutesElement.innerHTML = '00:';
    secondsElement.innerHTML = '00';
  };

  buttonElement.addEventListener('click', startTimer);

  resetElement.addEventListener('click', resetTimer);

  pauseElement.addEventListener('click', () => {
    clearInterval(timerInterval);
  });
};

document.addEventListener('DOMContentLoaded', timer);
