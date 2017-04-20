
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    // concatenate the two arrays into one big one and reduce it
    var objInv = arr1.concat(arr2).reduce(function(a,b){
      // if the accumulator contains the name of the first property
      if(a[b[1]]){
        // add the value of that property to the property n the accumulator
        a[b[1]]+= b[0];
      }
      // if the property does not exist in the accumulator
      else{
        // add the property and assign it the value
        a[b[1]] = b[0];
      }
      return a;
    },{});


  var result = [];
  // get he keys from the object
  var keys = Object.keys(objInv);
  var i, len = keys.length;

  // sort the keys in alphabetical order
  keys.sort();

  // for every item in the object
  for (i = 0; i < len; i++) {
    k = keys[i];
    // push the value of the key and the key into the result array
    result.push([objInv[k], k]);
  }

  return result;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
