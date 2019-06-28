const Weapon = function(name, durability, slash, blunt, pierce, reach, weight, slot, value) {
    this.name = name,
    this.durability = durability || 15,
    this.MaxDurability  = durability,
    this.slash = slash || 0,
    this.blunt = blunt || 0,
    this.pierece = pierce || 0,
    this.reach = reach || 1,
    this.weight = weight || 1,
    this.slot = slot,
    this.value = value || 1
}

const Armor = function(name, durability, slash, blunt, pierce, weight, slot, warmth, value) {
    this.name = name,
    this.durability = durability || 15,
    this.slash = slash || 0,
    this.blunt = blunt || 0,
    this.pierece = pierce || 0,
    this.weight = weight || 1,
    this.slot = slot,
    this.warmth = warmth || 0,
    this.value = value || 1
}



const Character = function(name, race, age, height, weight, hairStyle, hairColor, eyeColor, strength, agility, dexterity, perception, intelligence, wisdom, constitution, endurance){
    this.name = name.replace(/\s+/g, "").toLowerCase(),
    this.fullName = name,
    this.race = race || "human",
    this.age = age || 18,
    this.height = height || 17, //18 hands = 6ft, so 17 hands is 5'8... 4 inches to a hand
    this.weight = weight || 12, //14 pounds to a stone, so 12 stones is 168 lbs. 15 stones is 200lbs. 
    this.hairStyle = hairStyle || "short", // styles can be varied, perhaps just limit to it fitting a certain type of phrasing like "...worn 'short' or 'long with ponytail' 'long with curls about the shoulders'"
    this.hairColor = hairColor || "brown",
    this.eyeColor = eyeColor || "brown",
    this.build = "average",  //aesthetic, may change with fluctuations in statistic ratios (ie, if str+endurance+const > (agi+dex)*2 then becomes heavily built)... just flavor text atm but may result in certain sitautions arising or even resistances/vulnerabilities to status effects
    this.strength = strength || 4,  //for all stats, work with base 10 and low scaling, to increase sense of progression, minimum of 1... str affects damage with weapons of most types (code alternative in case by case?), carry capacity and gear restrictions
    this.agility = agility || 4, //general speed of movement, fluidity (ie some skill impact maybe?)
    this.dexterity = dexterity || 4, //speed with more emphasis on hands/feet than overall body positioning. Akin to hand/eye
    this.perception = perception || 4, //remaining factor in hand/eye, ability to spot things
    this.intelligence = intelligence || 4, //affects aptitude, affects experience garnered additionally, some gear requirements and varied skill impact, slightly affects spirit levels
    this.wisdom = wisdom || 4, //also affects aptitude, affects spirit more heavily than int, skill/gear reqs
    this.constitution = constitution || 4, //heavy impact on health, resistance to physical ails, small affect to stamina and carry
    this.endurance = endurance || 4, // heavily impacts stamina, small affect to physical resistances and carry
    this.health = 5, //vitality in pure, at low %'s causes status effects like weakness or faintness, loss of incurs unconc
    this.maxHealth = function() {
        maxHealth = (this.constitution * 4) + (this.endurance * 2) + this.strength;
        return maxHealth;
    },
    this.stamina = 5, //cost of performing special attacks or abilities, some spells take a lot of energy as well
    this.maxStamina = function() {
        maxStamina = (this.constitution * 2) + (this.endurance * 4) + this.strength + (this.agility * 2)+ (this.dexterity * 2);
        return maxStamina;
    },
    this.spirit = 5, //mental energy, factors into resistances of supernatural and resisting other status effects
    this.maxSpirit = function() {
        maxSpirit = (this.wisdom * 4) + (this.intelligence * 3) + this.endurance;
        return maxSpirit;
    },
    // this.aptitude = aptitude || 50, //out of 100, rate of gains, if high threshold then starting values are low, if low then starting values are scaled up, diminishing returns on fast start
    this.speed = function(){
        let speed = 0;
        let gearWeight = 0;
        for (let i = 0; i < this.equipment.length; i++){
            gearWeight += this.equipment[i].weight;
        }
        speed = ((this.agility+this.dexterity)*2) + (this.strength + this.endurance - (parseFloat(gearWeight)*2)) + ((this.stamina * 4) - this.maxStamina());
        if (speed < 5) { speed = 5 }
        return speed;
    },
    this.status = [], //holding array for status effects
    this.skills = [], //holding array for skill values, which will be in object notation (constructor???)
    this.equipment = [{name:"empty", weight: 0}], // array of equipment currently worn, will be of a set length of indexes and what slot it occupies will be handled by index. Upon changing gear that index will be sliced out into temporary variable and then either placed in inventory/at ground or if 'empty (undefined??)' then no action --- this depends on specific index, tougher to implement but may work with default empty gear for each slot that fills indexes, less scalable

    //other idea would be to make equipment an array of indeterminate length that can be empty if need be, and every item has a slot parameter, upon changing gear it compares slot of item being equipped to every item in equipped array, if another item in array has same slot value then the equipped item is taken out of array before new item is added in. tricky bit is 1h vs 2h weapons, or shields vs 2h weapons... will address later
    this.inventory = [] //at base level, self explanatory, but perhaps can use some sort of system of combined volume+weight, if no pack is used then is limited to open hands... maybe can carry multiple items in a hand/under arm but at cost of status effect ie encumbered, but more detailed?   
};

const Zone = function(name, temp, elevation, humidity, light){
    this.name = name,
    this.temp = temp,
    this.elevation = elevation,
    this.humidity = humidity,
    this.light = light
};


module.exports.Character = Character;
module.exports.Armor = Armor;
module.exports.Weapon = Weapon;
module.exports.Zone = Zone;