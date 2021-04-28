// console.log(Math.max(1, 3, 4, 5, 7, 9));
// console.log(Math.min(1, 3, -4, 5, -7, 9));

// console.log(Math.round(3.1415962)); //四捨五入

// console.log(Math.abs(-3.14159)); //取絕對值

// let array1 = [1, 3, 5, 7, 9]
// console.log(Math.max(...array1));

// console.log(Math.random());

// console.log(Math.floor(3.14159)); //無條件進位
// console.log(Math.floor(-3.14159));

function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

console.log(getRandom(1, 100));
let i = 1;
while (i <= 10) {
    console.log(i + " : " + getRandom(1, 100));
    i++;
}
