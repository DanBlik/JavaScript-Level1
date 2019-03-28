function getRandom () {
    let rand = Math.floor(Math.random() * 10000);
    if (rand > 1000){
        return rand;
    }
    else return getRandom();
}

var endGame = false;

let mainNumber = getRandom();
alert('Хочешь сыграем в одну игру? (с)Пила ' + mainNumber);


var counter = 0;
var playerChoose = prompt('Угадай моё 4-x значное число');

 while (endGame == false) {  
    if (playerChoose > mainNumber) {
        counter++;
        var playerChoose = prompt('Моё число меньше, попробуй ещё');
        var endGame = false;
    }
    else if (playerChoose < mainNumber) {
        counter++;
        var playerChoose = prompt('Моё число больше, попробуй ещё');
        var endGame = false;
    }
    else if (playerChoose == mainNumber) {
        counter++;
        alert('Тебе понадобилось ' + counter + ' ход(а), чтобы победить меня');
        var endGame = true;
    }
    else {
        var playerChoose = prompt('Введи число, а не какую-то дичь >_<');
        var endGame = false;
    }
} 

