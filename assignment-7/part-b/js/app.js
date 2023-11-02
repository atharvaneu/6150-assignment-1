// _________________________________________________________

$(document).ready(function () {
  // variables declaration
  let timeelapsed;
  let startingTime = 0;
  let running = false;
  let pausedTime = 0; // Store the time when paused
  let dateSelector = document.getElementById("date-selector");
  let timer = document.getElementById("stopwatch");
  let startBtn = document.getElementById("start");
  let stopBtn = document.getElementById("stop");
  let resetBtn = document.getElementById("reset");

  dateSelector.valueAsDate = new Date();
  dateSelector.max = new Date().toISOString().split("T")[0];

  async function updateTimer() {
    return new Promise((resolve) => {
      let currentTime = new Date().getTime();
      let elapsedTime = running ? currentTime - startingTime : pausedTime; // Use pausedTime when paused
      let time = new Date(elapsedTime);
      timer.innerHTML = time.toISOString().substr(11, 8);
      resolve();
    });
  }

  async function startTimer() {
    if (!running) {
      if (pausedTime === 0) {
        startingTime = new Date().getTime();
      } else {
        startingTime = new Date().getTime() - (pausedTime - startingTime);
        // Adjust startingTime when resuming from pause
      }
      timeelapsed = setInterval(async () => {
        await updateTimer();
      }, 1);
      running = true;

      $("#start").addClass("selected");
      $("#stop").removeClass("selected");
    }
  }

  function stopTimer() {
    if (running) {
      clearInterval(timeelapsed);
      pausedTime = new Date().getTime(); // Store the current time when paused
      running = false;

      $("#stop").addClass("selected");
      $("#start").removeClass("selected");
    }
  }

  function resetTimer() {
    stopTimer();

    $("#stop").removeClass("selected");
    $("#start").removeClass("selected");
    pausedTime = 0; // Reset pausedTime
    timer.innerHTML = "00:00:00";
  }

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
});
