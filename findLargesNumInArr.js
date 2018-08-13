//FIND THE LARGEST NUMBER IN AN ARRAY 
  function largestOfOne(num) {
  var max = [];
  for (var i=0; i<num.length;i++){
    if (num[i] > max){ 
      max = num[i]
      } 
  }

  return max;
  }
  largestOfOne([4, 53, 1, 13]); //53
  //
  function largestOfOne (arr){
  var emty = 0;
  for (var i=0; i<arr.length;i++){
    if (arr[i]>emty){
      emty = arr[i];
    }
  }
  return emty;
  }
  console.log(
  largestOfOne([3,5,655,54,87]));//655
  //

  //
  function sortingNumbers(arr) {
    var sorted = arr.sort(function (a, b){return b-a;});
    console.log(sorted);
  }
  sortingNumbers([4, 53, 1, 13]); 
