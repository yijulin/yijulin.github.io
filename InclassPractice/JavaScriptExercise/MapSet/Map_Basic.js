var taiwanArray = ["TW", 41, 1, 12];
var chinaArray = ["CH", 80134, 2914, 44595];
var americaArray = ["USA", 9665, 146, 694];

var map = new Map();

map.set("taiwan", taiwanArray);
map.set("china", chinaArray);
map.set("USA", americaArray);

console.log(map.get("taiwan"));
console.log(map.get("china"));
console.log(map.get("USA"));

for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}
for (let [key, value] of map) {
    console.log(`${key}:${value}`);
}

map.delete("china");
console.log(map);

map.clear();
console.log(map);