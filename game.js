const buttonColors =[
    'red',
    'blue',
    'green',
    'yellow'
]
let gamePattern = []
const newSequence =() =>{
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor)
    var music = new Audio(`./sounds/${randomChosenColor}.mp3`);
    music.play();
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
}
$(document).ready(
    $(this).keypress(newSequence)
)