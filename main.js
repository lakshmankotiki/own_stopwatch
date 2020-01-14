/**Own stopwatch(00:00:00) using time interval functions
 * using javascript and DOM
 * Requirements:
 * 1.When click on start button that keeps on increasing seconds
 * and start button should be disable
 * 2.When click on stop button that stop/pause the stopwatch
 * 3.When click on reset button that reset to 00:00:00
 * 4.And add leading zeros when hours/minutes/seconds count is lessthan 0
 */
var body = document.querySelector("body");
var para = document.querySelector("p");


//count the number of seconds
var secondsCount = 0;

//global values
var stopWatch;

/**converting hours, minutes and even seconds to sec */
var displayCount = function() {
    //for 1 hour 3600secs, with this we'll come to know count of hours
    var hours = Math.floor(secondsCount / 3600);
    //for 1 min 60secs, with this we'll come to know count of mins
    var minutes = Math.floor((secondsCount % 3600) / 60);
    //for calculating seconds
    var seconds = Math.floor(secondsCount % 60);

    //adding leading zeros for more understanding
    var displayHours = (hours < 10) ? '0' + hours : hours;
    var displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    var displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    //concatenating hours/minutes and secnds together
    var finalTimeFormat = displayHours + ':' + displayMinutes + ':' + displaySeconds;

    para.textContent = finalTimeFormat;

    secondsCount++;
};


//Creating buttons and appending all buttons to the body
var startButton = document.createElement("button");
var stopButton = document.createElement("button");
var resetButton = document.createElement("button");
startButton.textContent = "Start";
stopButton.textContent = "Stop";
resetButton.textContent = "Reset";
body.appendChild(startButton);
body.appendChild(stopButton);
body.appendChild(resetButton);


//adding event listener when click on start button
document.querySelectorAll("button")[0].addEventListener('click', function() {
    //our clock always increase one sec each time
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
    //we're resetting to 0 when click on reset button
    secondsCount = 0;
    displayCount();
});
//display stopwatch on loading the page and it takes global secondCount means 0
//so everything is 00:00:00 at this moment
displayCount();