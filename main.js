// Events countdown
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  console.log(minutes);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
  }
}, 1000);

// Stats section counter

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => count(num));
    }
    started = true;
  }
};

function count(el) {
  let goal = el.dataset.goal;

  let counter = setInterval(() => {
    el.textContent++;

    if (el.textContent === el.dataset.goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}

// Skills section animation
let skillsSection = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 50) {
    progress.forEach((prog) => {
      prog.style.width = prog.dataset.width;
    });
  }
};
