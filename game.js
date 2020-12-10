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
    $(body).addclass("game-over")
    setTimeout(()=>{
        $(body).removeclass("game-over")
    },200)
    start()
}
//for validating the users clicks
const gameChecker = (value) =>{
    if (value == gamepattern[valueChecker] && gamePattern[valueChecker + 1] == null){
        nextSequence()
    }else{
        if(value == gamePattern[valueChecker]){
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
    gameChecker(userClickPattern.pop())
    valueChecker++;
}
buttonColors.map((color) =>{
    console.log(color)
    $(`#${color}`).click(() =>{userClicked(color)})
})
//for tracking the level 
const nextSequence = () =>{
    currentLevel++;
    $('#level-title').text(`level - ${currentLevel}`)
    valueChecker = 0;
    newSequence();
}

const start = () =>{
    $('#level-title').text(`Press A Key to Start`)
    gamePattern = [];
    $(this).keypress(() =>{
        nextSequence();
    })
}
start()