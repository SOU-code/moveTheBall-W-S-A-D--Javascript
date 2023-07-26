var ball = document.getElementById("ball");
var box = document.querySelector(".box");
var interval;
window.addEventListener("keypress", function (event) {
  var constant = 0;
  var ballCod = ball.getBoundingClientRect();
  var boxCod = box.getBoundingClientRect();
  let style = getComputedStyle(ball);
  let k = event.key.toUpperCase();
  // For UP
  if (k == "W" && ballCod.top > boxCod.top) {
    var constant = ballCod.top - boxCod.top - 1;
    var interval = setInterval(function () {
      let top = style.top;
      let topLength = top.length - 2;
      let topLengthNumber = top.slice(0, topLength);
      ball.style.top = parseFloat(topLengthNumber) - parseFloat(1) + "px";
      constant -= 1;
      if (constant <= 0) {
        clearInterval(interval);
      }
      window.addEventListener("keypress", function (event) {
        clearInterval(interval);
      });
    }, 5);
  }
  // For DOWN
  else if (k == "S" && ballCod.bottom < boxCod.bottom - 1) {
    var constant = boxCod.bottom - 1 - ballCod.bottom;
    var interval = setInterval(function () {
      let top = style.top;
      let topLength = top.length - 2;
      let topLengthNumber = top.slice(0, topLength);
      ball.style.top = parseFloat(topLengthNumber) + parseFloat(1) + "px";
      constant -= 1;
      if (constant <= 0) {
        clearInterval(interval);
      }
      window.addEventListener("keypress", function (event) {
        clearInterval(interval);
      });
    }, 5);
  }
  // For LEFT
  else if (k == "A" && ballCod.left > boxCod.left + 1) {
    var constant = ballCod.left - boxCod.left - 1;
    var interval = setInterval(function () {
      let left = style.left;
      let leftLength = left.length - 2;
      let leftLengthNumber = left.slice(0, leftLength);
      ball.style.left = parseFloat(leftLengthNumber) - parseFloat(1) + "px";
      constant -= 1;
      if (constant <= 0) {
        clearInterval(interval);
      }
      window.addEventListener("keypress", function (event) {
        clearInterval(interval);
      });
    }, 5);
  }
  // For RIGHT
  else if (k == "D" && ballCod.right < boxCod.right - 1) {
    var constant = boxCod.right - 1 - ballCod.right;
    var interval = setInterval(function () {
      let left = style.left;
      let leftLength = left.length - 2;
      let leftLengthNumber = left.slice(0, leftLength);
      ball.style.left = parseFloat(leftLengthNumber) + parseFloat(1) + "px";
      constant -= 1;
      if (constant <= 0) {
        clearInterval(interval);
      }
      window.addEventListener("keypress", function (event) {
        clearInterval(interval);
      });
    }, 5);
  }
});
