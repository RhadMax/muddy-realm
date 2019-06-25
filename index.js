var items = require("./items.js");
var characters = require("./characters.js");

// console.log(items);
// console.log(characters);


const findIndex = (name, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === name){ return array[i]}
    }
}
let max = findIndex("max", characters)
console.log(max)
console.log(max.speed())