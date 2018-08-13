//REPEAT A STRING

  function repeatStringNumTimes(str, num) {

  if(num > 0){
    return str.repeat(num);
    }else{
    return "";
    }
  }
  repeatStringNumTimes("abc", 11);
  //

  //
  function repeatStringNumTimes(str, num) {
    return num > 0 ? str.repeat(num) : '';
  }
  repeatStringNumTimes("abc", 3);
  //

  //Recursive function
  function repeatStringNumTimes(str, num) {
    if(num < 0)
      return "";
      if(num === 1)
      return str;
      else
      return str + repeatStringNumTimes(str, num - 1);
  }
  repeatStringNumTimes("abc", -3);
  //
