$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var counter = 0;

  var targetNumber =  parseInt(Math.floor(Math.random() * 120) + 19);
  $("#randomNumber").html(targetNumber);
  console.log("targetNumber" + targetNumber);

  var crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
  var crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
  var crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
  var crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);
  console.log("crystal1" + crystal1)
  console.log("crystal2" + crystal2)
  console.log("crystal3" + crystal3)
  console.log("crystal4" + crystal4)

  function reset () {
    counter = 0;
    $("#counter").html(counter);
    targetNumber =  parseInt(Math.floor(Math.random() * 120) + 19);
    $("#randomNumber").html(targetNumber);

    crystal1 = parseInt(Math.floor(Math.random() * 12) + 1);
    crystal2 = parseInt(Math.floor(Math.random() * 12) + 1);
    crystal3 = parseInt(Math.floor(Math.random() * 12) + 1);
    crystal4 = parseInt(Math.floor(Math.random() * 12) + 1);
  }

  $("#crystal1").on("click", function() {

    counter = counter + crystal1;
    $("#counter").html(counter);
    console.log("counter1" + counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }
  });

  $("#crystal2").on("click", function() {

    counter = counter + crystal2;
    $("#counter").html(counter);
    console.log("counter2" + counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }
  });

  $("#crystal3").on("click", function() {

    counter = counter + crystal3;
    $("#counter").html(counter);
    console.log("counter3" + counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }
  });

  $("#crystal4").on("click", function() {

    counter = counter + crystal4;
    $("#counter").html(counter);
    console.log("counter4" + counter);

    if (counter == targetNumber) {
        checkifwon();
    } else if (counter > targetNumber) {
        checkifwon();
    }
  });

  // create win and lost
  function checkifwon() {

    if(counter === targetNumber) {
    wins++;
    console.log(wins);
    $("#result").html("You won!!");
    $("#winsText").html("Wins: " + wins);
    reset();
    } else if (counter > targetNumber) {
    losses++;
    console.log(losses);
    $("#result").html("You lost!!");
    $("#lossesText").html("Losses: " + losses);
    reset();
    }

  }

});
