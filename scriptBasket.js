var items = [
    {name: snack, price: 100, count: 0},
    {name: chips, price: 20},
    {name: pepsi, price: 50},
    {name: pizza, price: 200},
];   

document.querySelector('#addSnack').onclick = function () {
    if (basket.items !== undefined && basket.items !== items[0]) basket.items = basket.items + items[0];
    else basket.items = items[0];
    items[0].count +=1;
}

var addItemsBasket = function () {
    var arr = [];

};




var basket = {
    items: undefined,//objects
    price1: undefined,
    price: function() { // функция пересчета корзины
        if (this.items !== undefined){
          var result = this.items[0].price * this.items[0].count;
        this.price1 = result;  
        }
        else return 0;
    }
};
console.log(basket)