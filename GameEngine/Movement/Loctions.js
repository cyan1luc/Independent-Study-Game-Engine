const places = [];  //array for all locations in JSON file

function addPlaces(url){
    for(x in url.graph.name){   //iterate through the name objects in the JSON file
        let locations = x;
        places.push(locations);
    }
}

function returnPlaces(){
    return places;
}