//const gameEngine = require{'./GameEngine/GameEngine.js'};

const clientArray = [];
const game;
const gameID;

function addClient(client){
    clientArray.push(client);
}

function generateID(){
    let min = 10000;
    let max = 99999;
    let id = (Math.floor(Math.random() * (max - min)) + min).toString();
    this.gameID = id;
    return gameID;
}

function storeID(){
    generateID();
}


function createGame(){
    game = {name: "Text game", ID: gameID}
    storeID();
    addClient(this);
    console.log(gameID);
    return gameID;
}

function joinGame(gameID){
    let id = localStorage.getItem("GameID");
    let obj = JSON.parse(id);
    if(Object.is(game.ID, gameID)){
        addClient(this);//Adds the client
    }
    else{
        console.log("Cannot find the game.");
        joinGame(gameID);
    }
}

module.exports = {
    addClient,
    createGame,
    joinGame
}