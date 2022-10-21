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
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 
                    'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 
                    'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
                    'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
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
