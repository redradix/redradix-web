function updateTime() {
  var countDownDate = new Date('Sep 24, 2018 09:00:00').getTime();
  var clock = document.querySelector('.placeholder-countdown');
  var days = clock.querySelector('.days');
  var hours = clock.querySelector('.hours');
  var minutes = clock.querySelector('.minutes');
  var seconds = clock.querySelector('.seconds');

  setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    var newHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var newMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    days.innerHTML = newDays < 10 ? '0' + newDays : newDays;
    hours.innerHTML = newHours < 10 ? '0' + newHours : newHours;
    minutes.innerHTML = newMinutes < 10 ? '0' + newMinutes : newMinutes;
    seconds.innerHTML = newSeconds < 10 ? '0' + newSeconds : newSeconds;
  }, 1000)
};

function showElements() {
  var hiddenElements = document.querySelectorAll('.hidden');
  var interval = 500;

  [].forEach.call(hiddenElements, function(element) {
    setTimeout(function () {
      element.classList.remove('hidden');
    }, interval);

    interval = interval + 250;
  });
};

document.addEventListener('DOMContentLoaded', function() {
  updateTime();
  showElements();
})
