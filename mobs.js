const construct = require("./constructors.js");

var mobs = [];
//...5, 2, "mangy", "red", "yellow", "slim",
let fox = new construct.Character("fox", "beast", 4, 2, 6, 6, 8, 5, 3, 3, 4)


// console.log(fox.speed())
mobs.push(fox);
module.exports = mobs;




//leaving as scrap notes, example of a filter method for sorting array by contained object keys... but research shows that a for loop performing the same job actually runs faster on large arrays, so may be best to just use a loop outright in preparation for multiple users

// var words = [{ word: 'spray', "toggle": 1 },
// { word: 'limit', "toggle": 1 },
// { word: 'elite', "toggle": 0 },
// { word: 'exuberant', "toggle": 0 },
// { word: 'destruction', "toggle": 1 },
// { word: 'present', "toggle": 1 }];

// console.log(words[2].toggle);
// const result = words.filter(word => {
//     console.log(typeof word.toggle)
//     returnword.toggle > 0
// });

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
