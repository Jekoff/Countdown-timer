//1.set the starting time in minutes and convert it to seconds.
const startingMinutes = 10;
let time = startingMinutes * 60;

// Getting the HTML element with the id "countdown".
const countdownEl = document.getElementById('countdown');

// Setting an interval to call the updateCountdown function every second.
setInterval(updateCountdown, 1000);
// UpdateCountdown function, to calculate the minutes and seconds
//left, and update the "countdown" element's innerHTML with the 
//remaining time.
function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}