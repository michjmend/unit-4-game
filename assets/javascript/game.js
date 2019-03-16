$(document).ready(function() {
 //set variables
  var wins = 0;
  var losses = 0;
  var counter = 0;
//set target number variable such that the computer can generate a random number.
  var targetNumber =  (Math.floor(Math.random() * 120) + 19);
//use html functions to post values directly in the DOM so it appears in the browser
  $("#randomNumber").html(targetNumber);
  $("winsText").html(wins);
  $("lossesText").html(losses);
//create variables for EACH crystal such that the computer generates random values for each crsytal after each win or loss.
  var crystal1 = (Math.floor(Math.random() * 12) + 1);
  var crystal2 = (Math.floor(Math.random() * 12) + 1);
  var crystal3 = (Math.floor(Math.random() * 12) + 1);
  var crystal4 = (Math.floor(Math.random() * 12) + 1);
//now set the rest of the code to perform the functions needed for the game to work.
  function reset () {
    counter = 0;
    $("#counter").html(counter);
    targetNumber =  (Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(targetNumber);
//this function will create a reset after each win/loss has been reached.
    crystal1 = (Math.floor(Math.random() * 12) + 1);
    crystal2 = (Math.floor(Math.random() * 12) + 1);
    crystal3 = (Math.floor(Math.random() * 12) + 1);
    crystal4 = (Math.floor(Math.random() * 12) + 1);
  }
//I found a checkifwon function that will read my if statement and see if the values match completely. I called the function again at the end so that it could record the result.
  $("#crystal1").on("click", function() {

    counter = counter + crystal1;
    $("#counter").html(counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }

  });

  $("#crystal2").on("click", function() {

    counter = counter + crystal2;
    $("#counter").html(counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }

  });

  $("#crystal3").on("click", function() {

    counter = counter + crystal3;
    $("#counter").html(counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }

  });

  $("#crystal4").on("click", function() {

    counter = counter + crystal4;
    $("#counter").html(counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }

  });

  function checkifwon() {

    if(counter === targetNumber) {
    wins++;
    $("#result").html("You won!!");
    $("#winsText").html("Wins: " + wins);
    reset();
    } else if (counter > targetNumber) {
    losses++;
    $("#result").html("You lost!!");
    $("#lossesText").html("Losses: " + losses);
    reset();
    }

  }

});
