console.log('1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию')
let result
let tC = prompt('Введите температуру в градусах по Цельсию')
let tF =  (9 / 5) * tC + 32
console.log('Температура в градусах по Фаренгейту равна: ' + tF)

console.log('Задание 2')
let name = 'Василий'
let admin = name
console.log(admin)

console.log('Задание 3')
console.log("Результатом выражения 1000 + '108' будет: '1000108'")

console.log('Задание 4')
console.log('async - атрибут запускает скрипт ассинхронно, т.е. скрипт запустится без ожидания полной загрузки страницы')
console.log('defer - атрибут откладывает выполнение скрипта пока страница не загрузится полностью, также можно за счет этого атрибута выстраивать нужную последовательность выполнения скриптов')
