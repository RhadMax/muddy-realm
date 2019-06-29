var items = require("./items.js");
var characters = require("./characters.js");
var mobs = require("./mobs.js");
var inquirer = require("inquirer");
const construct = require("./constructors.js");

// console.log(items);
// console.log(characters);
var players = [];
var currentPlayer;
let newChar = new construct.Character("max", "human", 16, 7, 4, 3, 3, 1, 1, 7, 6);
console.log(newChar)

const findIndex = (name, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === name) {
            return array[i]
        }
    }
}

//first step of char creation, user selects name/race/age and chooses from template builds to start or can opt to start custom creation (custom creation not yet functioning)
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
            choices: ["Kil'jari", "Tiranian", "Wastelander", "Marshfolk", "Amurrkan"], //Maybe just regional origins, names tbd
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
                currentPlayer = newChar;
                intro();
                break;
            case "Berzerker":
                let newChar = new construct.Character(res.name, res.race, res.age, 7, 4, 3, 3, 1, 1, 7, 6);
                players.push(newChar);
                // currentPlayer = NewChar;
                confirmNewCharacter();
                break;
            case "Rogue":
                ;
            case "Ranger":
                ;
            case "Wizened":
                ;
            case "Invoker":
                ;
            case "Custom":
                newCharacterCustom(res);
                break;
        }
    });
}

//function for entering custom statistic values, current plan is it takes in the res from the first prompt where user selects name/race/age, then asks about stats one by one. Ideally it shows the total number of stat points left to allocate but unsure how inquirer can do that unless it chains a number of functions together, one for each stat, and maybe also even recursively calls itself untill the user selects a prompt to move on to next statistic. In that case it could maybe build an array up as it goes, passing it along from function to function as it chains along. Each function adjusting the stat value corresponding to an index in the statbuilder array, using inquirer prompts/responses. Each prompt could display the array (or object?) so the user has a look at their progress in building up their stats.  ---OR --- duh, make a function inside the inquirer prompt that displays current stats, remaining total, and user can select from list to increase/decrease each stat
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

//planned to be first thing upon loadup, simple prompt that calls other functions depending on choice
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
                newCharacter();
                break;
            case "Load Character":
                console.log("Loading not yet implemented");
                break;
            case "Exit Game":
                // connection.end(); //if it goes online
                break;
        }
    });
};

//idea to have a prompt with inquirer giving yes/no option to user after char creation is completed, so they can choose to start over if it doesn't look right. currently not being called nor is working properly
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
                intro();
                break;
            case "No":
                console.log("Very well, returning to main menu.");
                mainMenu();
                break;
        }
        return confirmNewGame;
    });

};


const gamePlay = function () {
    inquirer.prompt([
        {
            type: "input",
            message: "",
            name: "cmd"
        }
    ]).then((res) => {

        switch (res.cmd.toLowerCase()) {
            case "north":
            case "n":
                moveNorth()
                break;
            case "east":
            case "e":
                moveEast()
                break;
            case "south":
            case "s":
                moveNorth()
                break;
            case "west":
            case "w":
                moveNorth()
                break;
            case "save":
                savePlayer()
                gamePlay()
                break;
            case "quit":
                savePlayer()
                // connection.end()
                break;
            case "attack":
            case "a":
            case "kill":
            case "k":
                console.log("attack not yet implemented, all mobs are hostile as of this build")
                gamePlay();
        }

    });
};

mainMenu();

// let max = findIndex("max", characters)
// console.log(max)
// console.log(max.speed())