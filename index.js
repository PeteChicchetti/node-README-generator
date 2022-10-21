// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [

       {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
       },  
       {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
       }, 
       {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      }, 
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'What is your description?',
        name: 'description',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'What are your installation instructions?',
        name: 'install',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'What license did you use?',
        name: 'license',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'Who are the contributors?',
        name: 'contributers',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },
      {
        type: 'input',
        message: 'Additional questions?',
        name: 'questions',
        validate: (value) => {if(value){return true} else {return 'i need a value to contine'}}
      },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./${fileName}.md`, generateMarkdown(data) , (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answer) {

    const fileName = 'README'

    writeToFile(fileName, answer);
    });
    
}

// Function call to initialize app
init();
