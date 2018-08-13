    //USING OBJECTS FOR LOOKUPS
    // Setup
    function phoneticLookup(val) {
      var result = "";

      // Only change code below this line
      var contacts = {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo" :"Easy",
        "foxtrot":"Frank",

      };

      result = contacts[val];
      // Only change code above this line
      return result;
    }

    // Change this value to test
    phoneticLookup("echo");
