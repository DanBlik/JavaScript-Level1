//Задание 1
function changeTxt() {
    var button = document.querySelector('#button');
    if (button.textContent == 'Hello'){
        button.textContent = 'Привет';
    }
    else button.textContent = 'Hello';
}

//Задание 2
function changeTag() {
    var button2 = document.querySelector('#button2');
    hello1 = document.querySelector('.hello1');
    hello2 = document.querySelector('.hello2');
    hello1.style.display = 'none';
    hello2.style.display = 'inline';

}

//Задание 3
var task3 = document.getElementById('task3');
for (var i = 0; i < task3.children.length; i++) {
    task3.children[i].textContent = 'list' + i;
}

//Задание 4


var input1 = function () {
    var input = document.getElementById('input1').value;
    return +input;
}

var input2 = function () {
    var input = document.getElementById('input2').value;
    return +input;
}

var sum = function () {
    var result = input1() + input2();
    document.getElementById('result').innerText = result;
}

var mult = function () {
    var result = input1() * input2();
    document.getElementById('result').innerText = result;
}

var div = function () {
    var result = input1() / input2();
    document.getElementById('result').innerText = result;
}

var different = function () {
    var result = input1() - input2();
    document.getElementById('result').innerText = result;
}


 

