// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== "None") {
   return `[License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
 } return ' ';

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
  ${renderLicenseBadge(data.license)}
## ${data.username}
## ${data.projectName} 
## Table of Contents
* [Description](#Description) 
  [Installation](#Installation)
  [How to Use](#usage)
  [Contributors](#contributors) 
  [Test:](#test)
  [Dependencies:](#dependencies)

## Description 
  ${data.description}
## Installation
  ${data.dependencies}
## How to use 
  ${data.usage}
## Contributors
  ${data.contributors}
## Test
  ${data.test}
## Dependencies
  ${data.dependencies}
`;


}

module.exports = generateMarkdown;
