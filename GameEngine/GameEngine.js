
const {addClient, createGame, joinGame} = require('./Server/Server.js');
const {getJSON} = require('./JSONReader/JSON.js');

//import movement module into gameEngine
const {travel} = require('./Movement/Movement.js');

// import combat module into game engine
const {addCharacters, rollInitiative, characterTurn, characterCombat, combatMovement
      } = require('./Combat/Combat.js');

const {currentPlace, currentDescriptions} = require('./Movement/Locations.js');

module.exports = {
    addClient,
    createGame, 
    joinGame, 
    travel,
    rollInitiative,
    sorting,
    characterTurn,
    getJSON,
    currentPlace,
    currentDescription
}