////PALINDROMES
  var stack = [];
  var word = "racecar";
  var reversedWord ="";

  for (var i =0; i<word.length; i++){
    stack.push(word[i]);
  } 

  for (var i = 0; i<word.length; i++){
    word += stack.pop();
  }

  if (reversedWord === word){
    console.log("it is a palindrome");
  } else {
    console.log("its not");
  }
  //
