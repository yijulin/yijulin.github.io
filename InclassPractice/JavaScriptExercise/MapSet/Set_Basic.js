let set = new Set();
set.add(1);
set.add(4);
set.add(6);
set.add(81);
set.add(13);
set.add(1);
set.add(4);

console.log(set);
console.log("size: " + set.size);
console.log("type: " + typeof set);

set.delete(4);
console.log(set);
set.clear();
console.log(set);