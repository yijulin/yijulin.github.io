// let name1 = "ABC"; {
//     let name1 = "DEF";
//     console.log(name1);
// }
// console.log(name1);

// var name2 = "ZXC"; {
//     var name2 = "VBN";
//     console.log(name2);
// }
// console.log(name2);

// var name = "Kevin";
// let age = 35;
// const weight = 65;
// {
//     var name = "Mary";
//     let age = 28;
//     const weight = 48;
// }

// console.log(name);
// console.log(age);
// console.log(weight);

function displayTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    console.log(`${h}:${m}:${s}`);
}
displayTime();