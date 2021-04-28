// let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let Prices = [280, 320, 250, 210];

// let PriceWithTax = Prices.map(p => p * 1.05);
// console.log(PriceWithTax);

// let array1 = [...Array(100).keys()];
// let ary1 = array1.map(a => a + 1)
// console.log(ary1);

console.log("總金額:" + Prices.reduce(function (accumlatorm, currentValue) {
    return accumlatorm + currentValue;
}));