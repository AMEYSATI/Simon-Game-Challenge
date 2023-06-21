var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var randomChosenColour;
var userClickedPattern = [];
var level=0;
var gamestarted=false;

$(document).keypress(function(){
    if(gamestarted==false)
    {
        $("#level-title").text("Level " + level);
        nextSequence();
        gamestarted = true;
    }
});


$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


function nextSequence(){
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber=Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}
