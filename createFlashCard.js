"use strict";

var inquirer = require('inquirer');
var fs = require("fs");
var BasicFlashCard = require("./basicFlashCard.js");
var ClozeFlashCard = require("./clozeFlashCard.js");

// Creating FlashCards
inquirer.prompt([
        // Prompt User to enter question for flash card starting with Who/What/When/Where
        {
            type: "list",
            message: "What type of Flash Card do you want to create?",
            name: "userChoice",
            choices: ["Basic", "Cloze"]
        }
        // Prompt User to enter answer for question
    ]).then(processDecision);

    function processDecision(decision){
        console.log(decision);
        if (decision.userChoice === "Basic"){
            getBasicData();
        }
        else {
            getClozeData();
        }
    }

function getBasicData(){
          inquirer.prompt([
            // Get Question
            {
                type: "input",
                message: "Please enter your question",
                name: "question"
            },

            // Get Answer
            {
                type: "input",
                message: "Enter the answer",
                name: "answer",
            }
            ]).then(processBasic);
}

function processBasic(response){
    var basicCard = new BasicFlashCard(response.question, response.answer);
    basicCard.writeCard();
    }

function getClozeData(){
          inquirer.prompt([
            // This the part that is removed
            {
                type: "input",
                message: "Enter the first part of the statement.",
                name: "cloze",
            },
            // This is the remainder of the statement
            {
                type: "input",
                message: "Please enter the remainder of your statement",
                name: "remainder"
            }
            ]).then(processCloze);
}

function processCloze(response){
    var clozeCard = new ClozeFlashCard(response.cloze, response.remainder);
    clozeCard.writeCard();
    console.log(JSON.stringify(clozeCard));
    }