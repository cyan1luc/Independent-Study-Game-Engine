const rollArray = [];
const turnArray = []; //turn order
const playerArray = []; // player targets for NPC
const NPCArray = []; // NPC targets for player
const min = 1, max = 20;

// roll for order in combat
function rollInitiative(client){
    let order = Math.floor(Math.random() * (max - min)) + min;
    addCharacters(client);        //this should be refering to the client, adds client
}


function addCharacters(client){
    this.rollArray.push(client);  //adds client
}

function sorting(){
    //takes the roll array and sorts it into the turn array, in order from highest to //lowest
}

function characterTurn(turnArray){
    for(var i = 0; i <= NPCArray.length; i++){ //iterate through array for PC/NPC turns
        turn(turnArray[i]);                     //array for PC/NPC turns
        {
            //attack
        }
    }
}
function turn(character){
    //contain options for actions of the character
}

function attack(event){
    selectTarget();
    let x = event.key;
    if(typeof x == "number" && NPCArray[x] != "undefined"){//number and exist in array
        const target = NPCArray[x];
        return target; //numerical value of target the player attacks
                                    //returns the target object
    }
    else{
        console.log("input must be a number and one of the choices");
        attack(event);
    }
}

function selectTarget(){
    for(var x = 0; x < NPCArray.length; x++){
        console.log(x + ". " + NPCArray[x]);//print number and target
    }
}

module.exports = {
    rollInitiative,
    sorting,
    CharacterTurn,
    attack
}