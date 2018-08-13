//CONFIRM ENDING

  function confirmEnding(str, target) { 
    return str.substr(-target.length) === target;
  }
  confirmEnding("Bastian", "n");
  //

  function confirmEnding(str, target) {
    return str.substring(str.length-1) === target;
  }
  confirmEnding("color", "r");
