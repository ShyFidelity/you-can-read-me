// TODO: Include packages needed for this application
//import generate markdown and inquirer 
//bring in gen markdown and bring in data as paramter 
//pass answers to gen markdown func
// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      name: 'stack',
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
        message: 'Usage:',
    },
    {
        type: 'input',
        name: 'contribution',
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
        choices: ['[}'],
    },


    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
      },

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    .then((data) => {
        const fileName = 
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

