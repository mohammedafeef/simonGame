//essential variables for the game
const buttonColors =[
    'red',
    'blue',
    'green',
    'yellow'
]
let gamePattern = []
let currentLevel = 0;
let userClickedPattern = [];
let valueChecker = 0;
let started = false;
//for playing the button animations
const playTheAnimation =(selectedColor) =>{
    var music = new Audio(`./sounds/${selectedColor}.mp3`);
    music.play();
    $(`#${selectedColor}`).fadeOut(100).fadeIn(100);
    
}
//for creating new patterns
const newSequence =() =>{
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)
    playTheAnimation(randomChosenColor)
}
//for termination condition handling and reseting the game
const gameOver = () =>{
    console.log("game terminated")
    $("body").addClass("game-over")
    setTimeout(()=>{
        $("body").removeClass("game-over")
    },200);
    restart()
}
//for validating the users clicks
const gameChecker = (value) =>{
    console.log(gamePattern)
    if (value == gamePattern[valueChecker] && gamePattern[valueChecker + 1] == null){
        nextSequence()
    }else{
        if(value == gamePattern[valueChecker]){
            valueChecker++;
            return

        }else{
            gameOver()
        }
    }
}
//click event handler
const userClicked = (color) =>{
    console.log("user clicked")
    $(`#${color}`).addClass("pressed");
    setTimeout(()=>{
        $(`#${color}`).removeClass("pressed")
    },100)
    playTheAnimation(color)
    userClickedPattern.push(color);
    console.log(userClickedPattern)
    gameChecker(userClickedPattern.pop())
}
//for tracking the level 
const nextSequence = () =>{
    valueChecker = 0;
    currentLevel++;
    $('#level-title').text(`level - ${currentLevel}`);
    newSequence();
}
const restart = () =>{
    $(`#level-title`).text(`Game Over Enter A Key To Restart.`);
    gamePattern = [];
    currentLevel = 0;
    started = false;
}
//game starting potion
$(document).keypress(() =>{
    if(!started){
        nextSequence()
        started = true;
    }
})
buttonColors.map((color) =>{
    $(`#${color}`).click(() =>{userClicked(color)})
});