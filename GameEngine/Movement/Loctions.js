const places = [];  //array for all locations in JSON file
const descriptions = []; //array for the descriptions of each location
const i = 0;

function addPlaces(url){
    for(x in url.graph.name){   //iterate through the name objects in the JSON file
        let locations = x;
        places.push(locations);
    }
}

function currentPlace(x){
    console.log(places[x])
}

function addDescription(url){
    for(x in url.rooms.places[i].description.default{
        let roomDescriptions = x;
        descriptions.push(roomDescriptions);
        i++;
    }
}

function currentDescriptions(x){
    console.log(descriptions[x])
}

modules.export = {
    addPlaces,
    returnPlaces,
    addDescription,
    returnDescription
}