// var person = {
//      name:"Yiju", age:22, height:147, weight:50
//  };

//console.log(person);
var person = {
    name: "ABC",
    age: 32,
    height: 175,
    weight: 64,
    bmi: function () {
        return this.weight / ((this.height / 100) ** 2);
    }
};

//  console.log(person);
// console.log(person.bmi()); 
// console.log("The Object is "+ person); 
// console.log("This  Object is  %o", person);

var jsonText = JSON.stringify(person);
console.log(typeof jsonText);
var p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);