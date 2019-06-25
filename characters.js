const construct = require("./constructors.js");
const characters = [];

let max = new construct.Character("Max", "Max Al'vere", "Human", 32, 16, 15, "short", "brown", "brown", "average", 7, 5, 7, 5, 6, 3, 7, 6, 25, 45, 10, 75);

characters.push(max)
module.exports = characters;
// console.log(Max.speed());
