let Computer = ['CPU', 'DRAM', 'SSD', 'Mouse'];
let comp = new Array('CPU', 'DRAM', 'SSD', 'Mouse');
let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let Prices = [280, 320, 250, 210];
let Fruits = ['Apple', 'Banana', 'Cherry'];
let Person = ['John', 35, 'john@gmail.com'];

let friends = ["A", "B", "C"];
//以下是清除陣列的方法
// friends = [];
// friends.length = 0;
friends.splice(0, friends.length);
console.log(friends);
console.log(friends.length);


let msg = "";
Fruits.forEach((item, index) => {
    msg += item;
});
console.log(msg);

let msg2 = "";
for (let i = 0; i < Fruits.length; i++) {
    msg2 += Fruits[i];
}
console.log(msg2);

console.log(Fruits.join(""));

//==================================

let MyFriend = ["A", "B", "C"];
MyFriend.push("D");

console.log(MyFriend);
console.log(MyFriend.join(""));

MyFriend.pop();//移除最尾端的那一個
console.log(MyFriend);

let MyFriend2 = ["E", "F", "G"];
//陣列串接
let MyFriend3 = MyFriend.concat(MyFriend2);
let MyFriend4 = [...MyFriend, ...MyFriend2];

console.log(MyFriend3);
console.log(MyFriend4);

//==================================

console.log(Cars);
console.log(Cars.reverse()); //倒轉
console.log(Cars.sort()); //排序

console.log(Cars.find(c => c == "BMW"));
console.log(Cars.indexOf("Audi"));
console.log(Cars.findIndex(c => c == "Lexus"));

console.log(Prices);
console.log(Prices.find(c => c > 250)); //只能找一筆
console.log(Prices.filter(c => c > 250));

Prices.filter(function (item, index) {
    if (item > 250)
        console.log(Cars[index] + "'s price is " + item + " and is bigger then 250.");
});