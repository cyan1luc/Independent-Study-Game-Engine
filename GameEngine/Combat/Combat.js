const turnArray = []; //turn order
const playerArray = []; // player targets for NPC
const targetArray = []; // NPC targets for player

// roll for order in combat
function rollInitiative(bonus){
    let order = Math.random[1, 20] + bonus;
    addCharacters(turnArray);               //adds client
    return order;
}

//sorted array of turn orders, iterate through for turns. create new array once character dies?
function addCharacters(turnArray){
    this.turnArray.push(this);
    this.turnArray = turnArray;
}

function characterTurn(turnArray){
    for(var i = 0; i <= turnArray.length; i++){ //iterate through
                                                //array for PC/NPC turns
                                                //call movement and other combat
        
    }
}

function characterCombat(character, target, item){
    target - character + item; // health - attack + item
    return target; //health
}

function

module.exports = {
    rollInitiative,
    addCharacters,
    CharacterTurn,
    characterCombat
}