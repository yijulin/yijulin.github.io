const print = function (...Args) {
    console.log(typeof Args);
    console.log(Args instanceof Array);
    console.log(Args[0]);
    console.log(Args[1]);
    console.log(Args[2]);
    console.log(Args.join(""));
}

print("A", "B", "C", "D");