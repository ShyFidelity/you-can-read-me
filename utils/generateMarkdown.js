// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const path = require('path');


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  https://img.shields.io/badge/dynamic/yaml?url=<URL>&label=<LABEL>&query=<$.DATA.SUBDATA>&color=<COLOR>&prefix=<PREFIX>&suffix=<SUFFIX>


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
//send quetions to return text back and save to a file 
//spaces returns are literal 
//
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.username}
## ${data.projectName} 
*[] #installation 
    #description 
    #howtouse

`;


}

module.exports = generateMarkdown;
