/**Own stopwatch using time interval functions
 * using javascript DOM
 */
var body = document.querySelector("body");
var para = document.querySelector("p");


//count the number of seconds
var secondsCount = 0;

//global values
var stopWatch;

/**converting hours, minutes and even seconds to sec */
function displayCount() {
    //for 1 hour 3600secs, with this we'll come to know count of hours
    var hours = Math.floor(secondsCount / 3600);
    //for 1 min 60secs, with this we'll come to know count of mins
    var minutes = Math.floor((secondsCount % 3600) / 60);
    //
    var seconds = Math.floor(secondsCount % 60);

    var displayHours = (hours < 10) ? '0' + hours : hours;
    var displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    var displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    var finalTimeFormat = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    para.textContent = finalTimeFormat;

    secondsCount++;
};


var startButton = document.createElement("button");
var stopButton = document.createElement("button");
var resetButton = document.createElement("button");
startButton.textContent = "Start";
stopButton.textContent = "Stop";
resetButton.textContent = "Reset";
body.appendChild(startButton);
body.appendChild(stopButton);
body.appendChild(resetButton);


document.querySelectorAll("button")[0].addEventListener('click', function() {
    stopWatch = setInterval(displayCount, 1000);
    startButton.disabled = true;
});

document.querySelectorAll("button")[1].addEventListener("click", function() {
    clearInterval(stopWatch);
    startButton.disabled = false;
});

document.querySelectorAll("button")[2].addEventListener("click", function() {
    clearInterval(stopWatch);
    startButton.disabled = false;
    secondsCount = 0;
    displayCount();
});