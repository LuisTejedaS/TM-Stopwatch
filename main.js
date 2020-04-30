window.onload = function () {
  var seconds = 00;
  var minutes = 00;
  var tens = 00;
  var secondsForGreen = 0;
  var secondsForYellow = 0;
  var secondsForRed = 0;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    var value1 = $("#greenTime").val();
    var data = value1.split(":");
    secondsForGreen = data[0] * 60 + data[1] * 1;
    var value2 = $("#yellowTime").val();
    var data2 = value2.split(":");
    secondsForYellow = data2[0] * 60 + data2[1] * 1;
    var value3 = $("#redTime").val();
    var data3 = value3.split(":");
    secondsForRed = data3[0] * 60 + data3[1] * 1;
    if (secondsForGreen > secondsForRed || secondsForGreen > secondsForYellow) {
      alert("error en tiempos de cronometro");
      return;
    }
    if (secondsForYellow > secondsForRed) {
      alert("error en tiempos de cronometro");
      return;
    }
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    $("#semaphore").removeClass("semaphoreYellow");
    $("#semaphore").removeClass("semaphoreRed");
    $("#semaphore").removeClass("semaphoreGreen");
    $("#semaphore").addClass("semaphoreNormal");
  };

  function startTimer() {
    tens++;

    if (tens < 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      tens = 0;
      seconds = 0;
      appendTens.innerHTML = "0" + 0;
      appendSeconds.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
    if (minutes > 9) {
      appendMinutes.innerHTML = minutes;
    }

    if (seconds >= secondsForRed) {
      $("#semaphore").removeClass("semaphoreYellow");
      $("#semaphore").addClass("semaphoreRed");
    } else if (seconds >= secondsForYellow) {
      $("#semaphore").removeClass("semaphoreGreen");
      $("#semaphore").addClass("semaphoreYellow");
    } else if (seconds >= secondsForGreen) {
      $("#semaphore").removeClass("semaphoreNormal");
      $("#semaphore").addClass("semaphoreGreen");
    }
  }

  $(".inputTime").mask("00:00");
  $(".inputTimeTopic").mask("00:00");

  $("#time1").blur(function () {
    var value1 = $("#time1").val();
    var value2 = $("#time2").val();
    alert(value1 + value2);
  });
};
