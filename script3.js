
function sym(args) {
  // convert the ars into an array
  var argsArr = Array.prototype.slice.call(arguments);


  // Same, same; but different.
  // create a function to find the difference
  function symdiff(arr1, arr2){
    // create an empety array to store the unique values
    var newArr = [];
    // iterate through each item in the first array
    for (var i = 0; i <arr1.length; i++){
      // if the first item in the first array is not in the second array or in the new array
      if(arr2.indexOf(arr1[i])<0 && newArr.indexOf(arr1[i])<0){
        // push the item into the new array
        newArr.push(arr1[i]);
      }
    }
    // iterate through the second array
    arr2.forEach(function(item){
      // if the items in the second array are not present in the first array or in the new array
      if(arr1.indexOf(item)<0 && newArr.indexOf(item)<0){
        // push the item into the new array
        newArr.push(item);
      }
    });
    return newArr;

  }
  // reduce all the arrays and convert them into one single array with unique numbers
  return argsArr.reduce(symdiff);


}

sym([1, 2, 3], [5, 2, 1, 4]);
