"use strict";
var fs = require("fs");

var BasicFlashCard = function(front, back) {
    this.front = front;
    this.back = back;
    this.writeCard = function(){
        var basicTxt = this.front + "?" + this.back + "\n";
        fs.appendFile("basic.txt", basicTxt);
    console.log(basicTxt);
    }
}

module.exports = BasicFlashCard;




        // Check to make sure question starts with Who/What/When/Where
        // Store Question as "basic" variable
        // Create ClozeFlash card by removing Who/What/When/Where and storing as "cloze" variable
        // Store Answer as "answer" variable
    // Save "basic", "close" and "answer" variables to text file labeled with user name.