const construct = require("./constructors.js");
const items = [];

let stick = new construct.Weapon("Simple Stick", 10, 1, 3, 1, 1, 2, "hand", 0);
let simpleRobe = new construct.Armor("Simple Robe", null, 20, 10, 10, 0.5, "chest", 5, 2);

items.push(stick, simpleRobe)

module.exports = items;
// console.log(simpleRobe);