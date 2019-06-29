CREATE DATABASE muddy_realmDB;
USE DATABASE muddy_realmDB;



--Table holding player stats, hp, and position for when loading in, 
--this table should only be queried on save/load or as ID reference
CREATE TABLE players (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(50) NOT NULL,
    race VARCHAR(20),
    age DECIMAL(5,2) NOT NULL,
    strength INT(2) NOT NULL,
    agility INT(2) NOT NULL,
    dexterity INT(2) NOT NULL,
    perception INT(2) NOT NULL,
    intelligence INT(2) NOT NULL,
    wisdom INT(2) NOT NULL,
    constitution INT(2) NOT NULL,
    endurance INT(2) NOT NULL,
    health int(10) NOT NULL,
    stamina int(10) NOT NULL,
    spirit int(10) NOT NULL,
    x int(10) NOT NULL,
    y int(10) NOT NULL
);




--Table holding a reference of all misc items in game, 
--to be returned as objects using inner joins when player loads in,
--and **possibly to be used later when working out loot tables also
CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nme VARCHAR(50) NOT NULL, --name
    val INT(10) NOT NULL,     --value
    wgt INT(5) NOT NULL,      --weight
    descrip VARCHAR(255)      --description
);
CREATE TABLE weapons (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nme VARCHAR(50) NOT NULL, --name
    dur INT(10) NOT NULL,     --durability
    slash INT(5) NOT NULL,
    blunt INT(5) NOT NULL,
    pierce INT(5) NOT NULL,
    reach INT(5) NOT NULL,
    wgt INT(5) NOT NULL,      --weight
    slot VARCHAR(30) NOT NULL,
    val INT(10) NOT NULL,     --value
    descrip VARCHAR(255)      --description
);
CREATE TABLE armors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nme VARCHAR(50) NOT NULL, --name
    dur INT(10) NOT NULL,     --durability
    slash INT(5) NOT NULL,
    blunt INT(5) NOT NULL,
    pierce INT(5) NOT NULL,
    wgt INT(5) NOT NULL,      --weight
    warmth INT(5) NOT NULL,
    slot VARCHAR(30) NOT NULL,
    val INT(10) NOT NULL,     --value
    descrip VARCHAR(255)      --description
);


-- Table for tracking all player's items // do I need another table for each 
--armor/weapon? also how to track current durability...
CREATE TABLE player_items (

);




--Table for tracking all player's skills by player ID reference
CREATE TABLE skills (

);




--Table to hold all possible x,y positions, (omitting big stretches of
-- impassable areas if I decide to have those [seas? steep mountain region?])
-- whether they are passable or not and flavor text for each
CREATE TABLE map (

);




--Table to hold current player/mob current x,y positions, just a foreign key 
--relating each row to the player/mob it is tracking and then an x col and y col
CREATE TABLE posit (

);




--Table to hold all mobs. Will hold mobs as objects where each key is column of 
--this table: name, hp, sp, stam, raw attack, raw speed, raw defense... 
CREATE TABLE mobs (

);