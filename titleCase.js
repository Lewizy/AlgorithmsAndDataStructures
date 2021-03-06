//TITLE CASE

  function titleCase(str){
  return str.replace(/\w\S*/g, function(txt){
   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  titleCase("I'm a little tea pot");
  //


  function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
  }

  titleCase("I'm a little tea pot");


  //intermediate code solution
  String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  };


  function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
 }

  //Advance solution

  function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
  }

////////////////////////////////////////////////////////////////////////////
