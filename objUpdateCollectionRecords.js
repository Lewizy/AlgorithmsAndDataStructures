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
      "album": "ABBA Gold",
      "tracks":"",
  
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));



function updateRecords(id, prop, value) {

  var totalCollection = Object.keys(collection).length;
  console.log(totalCollection);//4
  
  for (var key in collection){
      
    if(collection[key].tracks === ""){
        
         collection[key].tracks = "no track available";
        
      }
     
    
  }
  return collection;
}


updateRecords();
console.log(collection);

