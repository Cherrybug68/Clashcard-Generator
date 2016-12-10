"use strict";
var fs = require("fs");

var ClozeFlashCard = function(cloze, text) {
    this.cloze = cloze;
    this.text = text;
    this.writeCard = function(){
    var clozeTxt = this.cloze + "..." + this.text + "\n";
    fs.appendFile("cloze.txt", clozeTxt);
    }
}

module.exports = ClozeFlashCard;





        // Check to make sure question starts with Who/What/When/Where
        // Store Question as "basic" variable
        // Create ClozeFlash card by removing Who/What/When/Where and storing as "cloze" variable
        // Store Answer as "answer" variable
    // Save "basic", "close" and "answer" variables to text file labeled with user name.