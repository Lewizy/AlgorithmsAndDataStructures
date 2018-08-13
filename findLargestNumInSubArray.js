//FIND THE LARGEST NUMBER IN A SUB ARRAY
  function largestOfFour(arr) {    
    var emtyArr = [];    
    for (var i=0;i<arr.length;i++){           
      emtyArr.push(arr[i].sort(function (a, b){return b-a;})[0]);  
      //var sorted = arr[i].sorted(function (a, b){return b-a;})[0];
      //emtyArr.push(sorted);         
    }                 
      return emtyArr ;         
  }             
    console.log(
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
    );
  //

  //
  function largestOfFour(arr) {
    var emtyArr = [];
    for (var i = 0; i < arr.length; i++){
         // for (let i in arr)
      arr[i].sort(function(a, b) {return b - a});
      emtyArr[i] = arr[i][0];
      //emtyArr.push(arr[i][0]);
    }
    return emtyArr;
  }
  console.log(
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
  );
  //

  //
  function largestOfFour(arr) {
    var emtyArr = [];
    for (var i = 0; i < arr.length; i++)
    {
      var largestNum = arr[i][0];
        for(var j=1; j<arr[i].length;j++){
            if(arr[i][j] > largestNum){
              largestNum = arr[i][j];
            }
        }
        emtyArr[i] = largestNum;
        //emtyArr.push(largestNum);
    }
    return emtyArr ;
  }
  console.log(
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  ////

  ////

  function largestOfFour(arr) {  
    var maxNumbers = [];
    for (var i = 0; i < arr.length; i++) {
      maxNumbers.push(Math.max.apply(null, arr[i]));
      //maxNumbers.push(Math.max(...arr[i]));
    }
    return maxNumbers;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  //

  //
  function largestOfFour(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
