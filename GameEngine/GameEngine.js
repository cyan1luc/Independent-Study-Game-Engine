
const {addClient, createGame, joinGame} = require{'./Client-Server/Server.js'};
const {getJSON} = require{'./JSONFiles/Game.JSON'};

//import movement module into gameEngine
const {groupMovement, vote} = require{'./Movement/Movement.js'};

// import combat module into game engine
const {addCharacters, rollInitiative, characterTurn, characterCombat, combatMovement
      } = require{'./Combat/Combat.js'};

function createGame(){
    const game = getJSON();
}

module.exports = {groupMovement, vote, addCharacters}