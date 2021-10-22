const inquirer = require('inquirer');
const fs = require('fs');
const path = require ('path');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this Project?',
      },


    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },
    {
        type: 'input',
        name: 'email',
        message: 'What is email?',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Description of project',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
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
        message: 'What license did you choose?',
        choices: ['ApacheLicense2.0', 'MIT', 'MozillaPublicLicense2.0', 'ArtisticLicense2.0', 'OliviaRodrigoDriversLicense', 'None'],
    }, 
    {
        type: 'input', 
        name: 'dependencies',
        message: 'What dependencies need to be installed',
        default: ['npm i'],
    },

    ];

//function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
 }
  

//function to start the app 
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile("README.MD", generateMarkdown({...data}))
        console.log("Look at you! You made a README! AWESOME!");
    });
}



// Function call to initialize app
init();
