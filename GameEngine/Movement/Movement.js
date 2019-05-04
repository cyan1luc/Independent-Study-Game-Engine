const {clientArray} = require{'./Client-Server/Server.js'};

function travel(){
    for(var i = 0; i < clientArray.length; i++){
        vote(clientArray[i]);
    }
    
}

function vote(character, NESW){
    direction(NESW);
}

function direction(NESW){
    switch(NESW){
        case "north":
            break;
        default:
            break;
    }
}

module.exports = {travel, vote, direction}