document.addEventListener('DOMContentLoaded', () => {
    const endData = new Date('Jul 24 2024 00:00:00');

    const daysVal = document.querySelector(".js-countdown__days .js-countdown__val");
    const hoursVal = document.querySelector(".js-countdown__hours .js-countdown__val");
    const minutesVal = document.querySelector(".js-countdown__minutes .js-countdown__val");
    const secondsVal = document.querySelector(".js-countdown__seconds .js-countdown__val");

    const daysText = document.querySelector(".js-countdown__days .js-countdown__text");
    const hoursText = document.querySelector(".js-countdown__hours .js-countdown__text");
    const minutesText = document.querySelector(".js-countdown__minutes .js-countdown__text");
    const secondsText = document.querySelector(".js-countdown__seconds .js-countdown__text");

    function numWord(value, words){  
        value = Math.abs(value);
        if(value > 1 || value == 0) {
            return words[1];
        }else {
            return words[0]; 
        }
    }

    const countdown = () => {
        let now = new Date();
        let timeLeft = endData - now;

        let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        let seconds = Math.floor(timeLeft / 1000) % 60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;

        daysText.textContent = numWord(days, ['Day', 'Days']);
        hoursText.textContent = numWord(hours, ['Hour', 'Hours']);
        minutesText.textContent = numWord(minutes, ['Minute', 'Minutes']);
        secondsText.textContent = numWord(seconds, ['Second', 'Seconds']);

    };

    countdown();
    setInterval(countdown, 1000);
});