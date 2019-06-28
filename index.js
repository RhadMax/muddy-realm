var items = require("./items.js");
var characters = require("./characters.js");
var mobs = require("./mobs.js");
var inquirer = require("inquirer");
const construct = require("./constructors.js");

// console.log(items);
// console.log(characters);
var players = [];
var currentPlayer;


const findIndex = (name, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === name) {
            return array[i]
        }
    }
}

const newCharacter = function () {
    inquirer.prompt([
        {
            type: "input",
            message: "What name do you go by?",
            name: "name"
        },
        {
            type: "list",
            message: "Of what race are you?",
            choices: ["Northerner", "Tiranian", "Wastelander", "Marshfolk", "Amurrkan"], //Maybe just regional origins, names tbd
            name: "race"
        },
        {
            type: "input",
            message: "How many years have you aged before coming here?",
            name: "age"
        },
        {
            type: "list",
            message: "Are you of a type already or would you decide your own path? \n [Template build or custom stat allocation] \n (There are no true classes in the Muddy Realm, this only affects starting stats/skills)",
            choices: ["Warrior", "Berzerker", "Rogue", "Ranger", "Wizened", "Invoker", "Custom"], //skills to be added still
            name: "class"
        }
    ]).then((res) => {
        var newChar;
        switch (res.class) {
            case "Warrior":
                newChar = new construct.Character(res.name, res.race, res.age, 6, 4, 4, 3, 2, 2, 6, 5);
                players.push(newChar);
                currentPlayer = NewChar;
                return intro();
            case "Berzerker":
                let newChar = new construct.Character(res.name, res.race, res.age, 7, 4, 3, 3, 1, 1, 7, 6);;
                players.push(newChar);
                // currentPlayer = NewChar;
                return confirmNewCharacter();
            case "Rogue":
                ;
            case "Ranger":
                ;
            case "Wizened":
                ;
            case "Invoker":
                ;
            case "Custom":
                return newCharacterCustom(res);
        }
    });
}
const newCharacterCustom = function (res) {
    inquirer.prompt([
        {
            type: "input",
            message: "What name do you go by?",
            name: "name"
        },
        {
            type: "list",
            message: "Of what race are you?",
            choices: ["Northerner", "Tiranian", "Wastelander", "Marshfolk", "Amurrkan"], //Maybe just regional origins, names tbd
            name: "race"
        },
        {
            type: "input",
            message: "How many years have you aged before coming here?",
            name: "age"
        },
    ]).then((stats) => {

    });
}


const mainMenu = function () {
    inquirer.prompt([
        {
            type: "list",
            choices: ["New Game", "Load Character", "Exit Game"],
            message: "Welcome to the Muddy Realms! Which road will you choose?",
            name: "menu"
        }
    ]).then((res) => {
        let choice = res.menu;
        switch (choice) {
            case "New Game":
                return newCharacter();
            case "Load Character":
                console.log("Loading not yet implemented");
                return;
            case "Exit Game":
                connection.end();
        }
    });
};
const confirmNewCharacter = function (res) {
    inquirer.prompt([
        {
            type: "list",
            message: "Looks like you selected: \n" + JSON.stringify(newChar, null, 2) + "\nDoes this look correct?",
            choices: ["Yes", "No"],
            name: "selection"
        }
    ]).then((answer) => {
        let confirmation = answer.selection;
        switch (confirmation) {
            case "Yes":
                return intro();
            case "No":
                console.log("Very well, returning to main menu.");
                return mainMenu();
        }
        return confirmNewGame;
    });

};
const combat = function () {
    inquirer.prompt([
        {

        }
    ]).then((res) => {

    });
};

mainMenu();

// let max = findIndex("max", characters)
// console.log(max)
// console.log(max.speed())