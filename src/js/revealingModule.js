/**
 * Revealing module pattern
 */
var myRevealingObject = (function () {
  var privateVarName = "Ben Cherry",
    publicVarMessage = "Hey there!";

  function privateFunction() {
    console.log(publicVarMessage, privateVarName);
  }

  function publicSetName(strName) {
    privateVarName = strName;
  }

  function publicGetName() {
    return privateVarName;
  }

  // Return revealing pointer
  return {
    setName: publicSetName,
    getName: publicGetName,
    // printName: privateFunction,
    greetingMessage: publicVarMessage
  }
})();

// myRevealingObject.greetingMessage = "Hello!"
myRevealingObject.setName('Anand');
console.log(myRevealingObject.getName());
// myRevealingObject.printName();