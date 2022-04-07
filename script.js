const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minEl = document.querySelector("#min");
const secEl = document.querySelector("#sec");

let newYear = "7 Apr 2022";

let timer = setInterval(countDown, 1000);

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countDown() {
  let current = new Date();
  let newYears = new Date(newYear);
  let totalSecs = Math.floor((newYears - current) / 1000);
  let min = Math.floor(totalSecs / 60) % 60;
  let hours = Math.floor(totalSecs / 3600) % 24;
  let days = Math.floor(totalSecs / 3600 / 24);
  let sec = Math.floor(totalSecs) % 60;

  function stop() {
    if (totalSecs <= 0) {
      clearInterval(timer);
      console.log(totalSecs);
      console.log(timer);
      document.getElementById("event").innerHTML = "EXPIRED";
    } else {
      daysEl.innerHTML = days;
      hoursEl.innerHTML = formatTime(hours);
      minEl.innerHTML = formatTime(min);
      secEl.innerHTML = formatTime(sec);
    }
  }
  stop();
}

//countDown();
