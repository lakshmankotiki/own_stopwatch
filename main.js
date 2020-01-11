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

var d = new Date("01/01/2020");
var dateString = d.toLocaleTimeString();
document.querySelector("p").textContent = dateString;

document.querySelectorAll("button")[0].addEventListener('click', function() {
    var n = 0;

    function count() {
        console.log("n is: ", n);
        n += 1;
    };
    setInterval(count, 1000);
});

// var startFunction = function() {
//     var n = 0;

//     function count() {
//         console.log("n is: ", n);
//         n = n + 1;
//     }
//     console.log(setInterval(count, 1000));
// };

var stopFunction = function() {

};

var resetFunction = function() {

};