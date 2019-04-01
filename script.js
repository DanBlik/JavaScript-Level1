console.log('Задание 1'); //С помощью цикла while вывести все простые числа в промежутке от 0 до 100
for (let i = 0; i < 101; i++) {
    console.log(i);
}

console.log('Задание 2-3'); // Корзина
let items = ['beer', 'fish', 'meat', 'chips'];
let prices = [100, 150, 300, 50];

function countBasketPrice () {
    var sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    console.log('Сумма всех товаров в корзине: ' + sum);
}

countBasketPrice ();

console.log('Задание 4'); // Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. 

var numbers = function () {
    for (let i = 0; i < 10; console.log(i), i++){}
}
numbers();

console.log('Задание 5'); //Нарисовать пирамиду с помощью console.log

let pyramid = '#';
for (let i = 0; i < 20; pyramid+='#', i++){
    console.log(pyramid);
}
