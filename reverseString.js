//REVERSE STRING
  function reverseString(str) {
    return str.split('').reverse().join("");
  }
  console.log(reverseString("hello"));//"olleh"

  function reverseString(str) {
    var array = str.split('').reverse().join("");
    return array;
  }
  console.log(reverseString("hello"));//"olleh"
