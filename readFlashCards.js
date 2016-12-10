"use strict";

var inquirer = require('inquirer');
var fs = require("fs");
var BasicFlashCard = require("./basicFlashCard.js");
var ClozeFlashCard = require("./clozeFlashCard.js");

// Reading FlashCards
function readBasicCards()
	{
		fs.readFile("basic.txt", "utf8", readBasicResult);
	};

function readBasicResult(err, data) {
	if (err) {
		console.log("something isn't working basic");
	}
	else {
		var fileData = data.trim();  //This gets rid of last \n
        var lines = fileData.split("\n");
        for (var i = 0; i < lines.length; i++){
            var question_answer = lines[i].split("?");
		    console.log("Question: " + question_answer[0]);
            console.log("Answer: " + question_answer[1]);
            console.log();
        }

	}
}

// Reading FlashCards
function readClozeCards()
	{
		fs.readFile("cloze.txt", "utf8", readClozeResult);
	};

function readClozeResult(err, data) {
	if (err) {
		console.log("something isn't working in Cloze");
	}
	else {
		var fileData = data.trim();  //This gets rid of last \n
        var lines = fileData.split("\n");
        for (var i = 0; i < lines.length; i++){
            var cloze_rem = lines[i].split("...");
		    console.log("Cloze: " + cloze_rem[0]);
            console.log("Remainder: " + cloze_rem[1]);
            console.log();
        }

	}
}

readBasicCards();
console.log("******************");
readClozeCards();