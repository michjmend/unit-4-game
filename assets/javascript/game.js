//set target number variable such that the computer can generate a random number.
var targetNumber =  (Math.floor(Math.random() * 120) + 19);
//create variables for EACH crystal such that the computer generates random values for each crsytal after each win or loss.
var crystal1 = (Math.floor(Math.random() * 12) + 1); //returns a random integer between these numbers (1 and 12)
var crystal2 = (Math.floor(Math.random() * 12) + 1);
var crystal3 = (Math.floor(Math.random() * 12) + 1);
var crystal4 = (Math.floor(Math.random() * 12) + 1);
//set variables to display counter score, wins and losses
var counter = 0;
var wins = 0;
var losses = 0;

$(document).ready(function(){
//use html functions to post values directly in the DOM so it appears in the browser
  $("#randomNumber").html(targetNumber);
    $("winsText").html(wins);
    $("lossesText").html(losses);

  //now set the rest of the code to perform the functions needed for the game to work.
  function update() {
    //add conditional event that if the counter reaches the target number, the user wins. Then display what happens when the user loses.
    if(counter === targetNumber){
    wins++;
    $("#result").html("You won!!");
    $("#winsText").html("Wins: " + wins);
    startOver();
    } else if (counter > targetNumber) {
    losses++;
    $("#result").html("You lost!!");
    $("#lossesText").html("Losses: " + losses);
    startOver();
    }
//define startOver function
  }
  function startOver(){
    //when you win or lose, game must restart. you must call the variables and set them to 0 out with new values by randomizing
    counter = 0;
    targetNumber =  (Math.floor(Math.random() * 120) + 19);
    crystal1 = (Math.floor(Math.random() * 12) + 1);
    crystal2 = (Math.floor(Math.random() * 12) + 1);
    crystal3 = (Math.floor(Math.random() * 12) + 1);
    crystal4 = (Math.floor(Math.random() * 12) + 1);
    $("#counter").html(counter);
    $("#randomNumber").html(targetNumber);

  }

  $("#crystal1").on("click", function(){

    counter = counter + crystal1;

    if (counter == targetNumber){
        update();
    } else if (counter > targetNumber){
        update();
    }
    $("#counter").html(counter);

  });

  $("#crystal2").on("click", function(){

    counter = counter + crystal2;

    if (counter == targetNumber){
        update();
    } else if (counter > targetNumber){
        update();
    }
    $("#counter").html(counter);

  });

  $("#crystal3").on("click", function(){

    counter = counter + crystal3;

    if (counter == targetNumber){
        update();
    } else if (counter > targetNumber){
        update();
    }
    $("#counter").html(counter);

  });

  $("#crystal4").on("click", function(){

    counter = counter + crystal4;

    if (counter == targetNumber){
        update();
    } else if (counter > targetNumber){
        update();
    }
    $("#counter").html(counter);

  });

});

//there is a way to insert the crystal images onto the js file  but I was unable to figure that out.
