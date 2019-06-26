const construct = require("./constructors.js");

var mobs = [];

let fox = new construct.Character("fox", "Slinking red fox", "beast", 4, 5, 2, "mangy", "red", "yellow", "slim", 2, 6, 6, 8, 5, 3, 3, 4, 10, 20, 5, 50)


// console.log(fox.speed())
mobs.push(fox);
module.exports = mobs;