var items = require("./items.js");
var characters = require("./characters.js");
var mobs = require("./mobs.js");
var inquirer = require("inquirer");

// console.log(items);
// console.log(characters);


const findIndex = (name, array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === name) {
            return array[i]
        }
    }
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
                //all broken in here... promise maybe??
                var confirmNewGame = new Promise(confirm(res).then(function(){
                    console.log("debug")
                    switch (confirmNewGame) {
                        case "Yes":
                            intro();
                        case "No":
                            console.log("Very well, returning to main menu.");
                            mainMenu();

                    };
                });
            case "Load Character":
                ;
            case "Exit Game":
                ;
        }
    });
};
const confirm = function (res) {
    inquirer.prompt([
        {
            type: "list",
            message: "Looks like you selected: \n" + JSON.stringify(res, null, 2) + "\nDoes this look correct?",
            choices: ["Yes", "No"],
            name: "selection"
        }
    ]).then((answer) => {
        let confirmation = answer.selection;
        switch (confirmation) {
            case "Yes":
                confirmNewGame = "Yes";
            case "No":
                confirmNewGame = "No";
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