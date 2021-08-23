// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== "None") {
   return `[License] (https://img.shields.io/static/v1?label=license&message=${license}&color=blue)`;
 } return ' ';

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lApache = '(https://www.apache.org/licenses/LICENSE-2.0)';
  let lMIT = '(https://opensource.org/licenses/MIT)';
  let lMozilla = '(https://www.mozilla.org/en-US/MPL/2.0/)';
  let lArtistic = '(https://opensource.org/licenses/Artistic-2.0)';
  let LOliva = '(https://www.youtube.com/watch?v=ZmDBbnmKpqQ)';

  // if (license != "None") {
  //   return ## ${data.license}
  // }

}

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
##[${data.username}](https://github.com/${data.username}/)
## ${data.projectName} 
## Table of Contents
* [Description](#Description) 
  [Motivation](#motivation)
  [Installation](#Installation)
  [How to Use](#usage)
  [Contributors](#contributors) 
  [Test:](#test)
  [Dependencies:](#dependencies)
  [License link:](#LicenseLink)

## Description 
  ${data.description}
## Description 
  ${data.motivation}
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
## License Link
`;


}

module.exports = generateMarkdown;
