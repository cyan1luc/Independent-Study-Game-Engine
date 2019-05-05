function travel(){
    for(var i = 0; i < clientArray.length; i++){
        vote();
    }
    
}

function vote(){
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

module.exports = {travel}