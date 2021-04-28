// let person = {
//     name:"Yiju", age:22, height:147, weight:1
// };

// console.log(person);
// console.log("my name is "+person.name);
// console.log("my age is "+person.age);
// console.log("my height is "+person.height);
// console.log("my weight is "+person.weight);
// console.log("=*".repeat(10));
// console.log("my name is "+person["name"]);
// console.log("my age is "+person["age"]);
// console.log("my height is "+person["height"]);
// console.log("my weight is "+person["weight"]);
// console.log("=*".repeat(10));

// let keys = Object.keys(person);
// keys.forEach((item,index) => {
//     console.log(`my ${item} is ${person[item]}`);
//     // console.log(item+":"+person[item]);
// });

let people=[
    {name:"Yiju", age:22, height:147, weight:11},
    {name:"Yiju1", age:23, height:146, weight:12},
    {name:"Yiju2", age:24, height:145, weight:13},
    {name:"Yiju3", age:25, height:144, weight:14},
    {name:"Yiju4", age:26, height:143, weight:15}
];

people.forEach((item,index) => {
    // console.log(item);
    let keys = Object.keys(item);
    let msg = index+". ";
    keys.forEach((key,index) => {
    msg+=key+":"+item[key]+",";
       
        
    });
    console.log(msg);
});