//Задание 1
function makeObj(num){
    let obj = new Object;
    if (num < 10 && num >= 0){
        obj.units = num;
    }
    else if (num < 100 && num >= 10){
        decades = Math.floor(num / 10);
        units = num - decades * 10;
        obj.decades = decades;
        obj.units = units;
    }
    else if (num < 1000 && num >= 100){
        hundreds = Math.floor(num / 100);
        decades = Math.floor((num - hundreds * 100) / 10);
        units = num - (hundreds * 100 + decades * 10);
        obj.hundreds = hundreds;
        obj.decades = decades;
        obj.units = units;
    }
    else console.log("Error! You must enter numbers in the range 0 - 999");
    return obj;
}

//Задание 3
/*
В процессе)
*/
