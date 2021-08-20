// TODO: Include packages needed for this application
//import generate markdown and inquirer 
//bring in gen markdown and bring in data as paramter 
//pass answers to gen markdown func
// TODO: Create an array of questions for user input

const inquirer = require('inquirer');
const fs = require('fs');
const path = require ('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [

    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },

    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description of project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Install instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use:',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Contributors:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test:',
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', 'MIT License', 'Mozilla Public License 2.0', 'Artistic License 2.0', 'Olivia Rodrigo Drivers License'],
    }, 
    {
        type: 'input', 
        name: 'dependencies',
        message: 'What dependencies need to be installed',
        default: ['npm i'],
    },

    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }
  

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.MD", generateMarkdown({...data}))
    });
}



// Function call to initialize app
init();
