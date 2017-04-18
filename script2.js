
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    // if the value is empty
    if(!value){
      // delete the prop property
      delete collection[id][prop];
      // and return the colletion so that no other property can be set
      return collection;
    }
    // if the prop isn't tracks and the value isnt empty
    if(prop !=="tracks" && value !==""){
        // add the value to the right prop
        collection[id][prop]=value;
    }
    // else(if the prop is tracks and the value is empty)
    else {
      // if the collection object does not have a tracks property
      if(!collection[id].hasOwnProperty("tracks"))
      // create an emptytracks array
      collection[id].tracks=[];
      // and push the given value to the array
      collection[id].tracks.push(value);

    }



  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
