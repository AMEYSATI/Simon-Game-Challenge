var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];
var randomChosenColour;
var userClickedPattern = [];

function nextSequence(){
    var randomNumber=Math.random()*3;
    randomNumber = Math.floor(randomNumber);
    randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

$(".btn").on("click" , function(){
    var userChosenColour = $this.attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
})

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    playSound(audGio);
}
