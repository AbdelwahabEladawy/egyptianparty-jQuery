

$("#open").on("click", () => {
$(".links").animate({width:"toggle"})
});



$(".content1 h3").on("click",()=>{
    $(".content1 p").slideToggle(1000) 
})
$(".content2 h3").on("click",()=>{
    $(".content2 p").slideToggle(1000) 
})
$(".content3 h3").on("click",()=>{
    $(".content3 p").slideToggle(1000) 
})
$(".content4 h3").on("click",()=>{
    $(".content4 p").slideToggle(1000) 
})

// start counter 
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let storedTargetDate = localStorage.getItem('targetDate');
let targetDate;

if (storedTargetDate) {
  targetDate = new Date(storedTargetDate);
} else {
  targetDate = new Date(Date.now() + 40*24*60*60*1000 + 18*60*60*1000 + 20*60*1000 + 30*1000);
  localStorage.setItem('targetDate', targetDate);
}

function updateCountdown() {
  let now = new Date();
  let timeRemaining = targetDate - now;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    days.textContent = "0";
    hours.textContent = "0";
    minutes.textContent = "0";
    seconds.textContent = "0";
    return;
  }

  let remainingDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let remainingHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let remainingMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let remainingSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  days.textContent = remainingDays;
  hours.textContent = remainingHours;
  minutes.textContent = remainingMinutes;
  seconds.textContent = remainingSeconds;
}
let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// end  counter 




// start textArea logic 

document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("message");
  const charCount = document.getElementById("charCount");
  const warning = document.getElementById("warning");
  const maxChars = 100;

  textarea.addEventListener("input", function () {
      const remaining = maxChars - textarea.value.length;
      charCount.textContent = `${remaining} characters remaining`;

      if (remaining <= 0) {
          warning.classList.remove("d-none");
      } else {
          warning.classList.add("d-none");
      }
  });
});
// end textArea logic








