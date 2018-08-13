//FIND THE LONGEST WORD
  function findLongestWord(str) {
    var words = str.split(' ');
    var maxLength = 0;

    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }

    return maxLength;
  }

  //
  function findLongestWord(str) {
    
    str = str.split(" ").sort(function (a, b){
      return a.length - b.length;
    });
    return str[str.length - 1 ].length;

  }

  //
    function findLongestWord(s) {
      return s.split(' ')
      .reduce(function(x, y) {
        return Math.max(x, y.length)
      }, 0);
    }

    console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
