//const gameEngine = require{'./GameEngine/GameEngine.js'};

var clientArray = [];
var game;

function addClient(client){
    clientArray.push(this);
}

function createGame(gameID, file){
    game = {id : gameID, gameFile: file};
    addClient(this);          //this refers to client object or game object?
//    console.log(game);
    return game.id;
}

function joinGame(gameID, client){
    if(Object.is(game.id, gameID)){
        addClient(client);
    }
    else{
        console.log("Cannot find the game.");
    }
}

module.exports = {
    addClient,
    createGame,
    joinGame
}