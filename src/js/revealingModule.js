/**
 * Revealing module pattern
 */
class RevealingModule {
  constructor () {
    this.privateVarName = 'Ben Cherry';
    this.publicVarMessage = 'Hey there!';
    
    // Return revealing pointer
    return {
      setName: this.publicSetName,
      getName: this.publicGetName,
      greetingMessage: this.publicVarMessage
    };
  }

  privateFunction() {
    console.log(this.publicVarMessage, this.privateVarName);
  }

  publicSetName (strName) {
    this.privateVarName = strName;
  }

  publicGetName () {
    return this.privateVarName;
  }
}

export {RevealingModule};

// var _RevealingObject = new RevealingModule();
// _RevealingObject.setName('Anand');
// console.log(_RevealingObject.getName());
