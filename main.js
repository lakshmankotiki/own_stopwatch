/**Own stopwatch using time interval functions
 * using javascript DOM
 */
var body = document.querySelector("body");


// var myH2 = document.createElement("h2");
// myH2.textContent = "My Own StopWatch";
// body.appendChild(myH2);
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
    startFunction();
});

document.querySelectorAll("button")[1].addEventListener("click", function() {
    stopFunction();
});

document.querySelectorAll("button")[2].addEventListener("click", function() {
    resetFunction();
});

var startFunction = function() {
    var d = new Date();
    var timeFormat = d.toLocaleTimeString();
    document.querySelector("p").textContent = timeFormat;
    var clearInt = setInterval(() => {
        startFunction();
    }, 1000);
};
// var recInterval = setInterval(() => {
//     startFunction();
// }, 1000);

var stopFunction = function() {
    // clearInterval(clearInt);
    clearInterval().call(clearInt);
};

var resetFunction = function() {
    document.querySelector("p").textContent = "00:00:00";
};