// TODO: Include packages needed for this application
const gmd = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    inquirer
    .prompt([
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
     
    ])
    .then((data) =>{
        const fileName = 'README.md';
            writeToFile(fileName, data);
    })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./${fileName.toUpperCase().split(' ').join('')}.md`, data , (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    generateMarkdown();
    renderLicenseBadge();
    renderLicenseLink();
    renderLicenseSection();
    writeToFile();
}

// Function call to initialize app
init();
