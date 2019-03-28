console.log('Задание 1'); //Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; console.log(c);           // 2 префиксный инкремент ++а увеличивает изначальное значение сразу же
d = b++; console.log(d);           // 1 постфиксный инкремент а++ увеличивает значение на следующей операции со значением
c = (2+ ++a); console.log(c);      // 5 Итоговое выражение: 2 + 3, т.к. а=2, после инкремента префикс. а=3
d = (2+ b++); console.log(d);      // 4 Итоговое выражение: 2 + 2, т.к. значение b после постфиксного инкремента стала равна 2
console.log(a);                    // 3 Из позапрошлой строки видно, что а=3 и переменная больше не изменялась
console.log(b);                    // 3 После очередного постфиксного инкремента переменная b=3

console.log('Задание 2'); //Чему буде равен x?
var a = 2;
var x = 1 + (a *= 2); // 1)а *= 2 => a = a * 2 = 4; 2) 1 + 4 = 5
console.log('x = 5');

console.log('Задание 3');
var a = 5;
var b = 10;
if (a >= 0 && b >= 0) {
    console.log(a - b);
}
else if (a < 0 && b < 0) {
    console.log(a * b);
}
else{
    console.log(a + b);
}

console.log('Задание 4'); //Присвоить переменной x значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от x до 15
var x = prompt('Введите значение х от 0 до 15')

    switch(x) {
        case '0':
        console.log('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '1':
        console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '2':
        console.log('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
        
        case '3':
        console.log('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '4':
        console.log('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '5':
        console.log('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '6':
        console.log('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '7':
        console.log('7, 8, 9, 10, 11, 12, 13, 14, 15');
        break;
        
        case '8':
        console.log('8, 9, 10, 11, 12, 13, 14, 15');
        break;

        case '9':
        console.log('9, 10, 11, 12, 13, 14, 15');
        break;

        case '10':
        console.log('10, 11, 12, 13, 14, 15');
        break;

        case '11':
        console.log('11, 12, 13, 14, 15');
        break;

        case '12':
        console.log('12, 13, 14, 15');
        break;

        case '13':
        console.log('13, 14, 15');
        break;
        
        case '14':
        console.log('14, 15');
        break;

        case '15':
        console.log('15');
        break;

        default:
        console.log('Введите значение от 0 до 15!')
    }

console.log('Задание 5');
function sum (arg1, arg2) {
    return arg1 + arg2;
}
function diff (arg1, arg2) {
    return arg1 - arg2;
}
function mult (arg1, arg2) {
    return arg1 * arg2;
}
function division (arg1, arg2) {
    return arg1 / arg2;
}

console.log('Задание 6'); //По условию нужно сделать на свитч-кейс, если будет необходимо - залью новым комитом :)
function mathOperation(arg1, arg2, operation) {
    if (operation == sum) {
        return sum(arg1, arg2);
    }
    else if (operation == diff) {
        return diff (arg1, arg2);
    }
    else if (operation == mult) {
        return mult (arg1, arg2);
    }
    else if (operation == division) {
        return division (arg1, arg2);
    }
}

console.log('Задание 7'); //Сравнить null и 0
console.log(0 >= null);
console.log(0 <= null);
console.log(0 > null);
console.log(0 < null);
console.log(0 == null); // Данный результат - специфика языка JavaScript

console.log('Задание 8');
function power (val, pow) {
    if (pow == 0){
        return 1;
    }
    else {
      return val * power (val, (pow - 1));  
    } 
}

