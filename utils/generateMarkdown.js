// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== "None") {
   return `(https://img.shields.io/badge/license-${license}-blue.svg)`;
 } return ' ';

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  let lApache = '(https://www.apache.org/licenses/LICENSE-2.0)';
  let lMIT = '(https://opensource.org/licenses/MIT)';
  let lMozilla = '(https://www.mozilla.org/en-US/MPL/2.0/)';
  let lArtistic = '(https://opensource.org/licenses/Artistic-2.0)';
  let LOliva = '(https://www.youtube.com/watch?v=ZmDBbnmKpqQ)';

  let linkArray = [lApache,lMIT,lMozilla,lArtistic,LOliva];

  for (const value of linkArray) {
  console.log(value);
  
    
  }
  

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(value) {
  if (license !== "None") {
    return `
    Copyright: ${license}
    [License link: ]${renderLicenseLink(value)}`;
    
  }
}
// TODO: Create a function to generate markdown for README
//send quetions to return text back and save to a file 
//spaces returns are literal 
//

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## GitHub Username and link
##[${data.username}](https://github.com/${data.username}/)
## Table of Contents
* [Description](#Description) 
  [Motivation](#motivation)
  [Installation](#Installation)
  [How to Use](#usage)
  [Contributors](#contributors) 
  [Test:](#test)
  [Dependencies:](#dependencies)
  

## Description 
  ${data.description}
## Motivation 
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
## License
${renderLicenseSection(value[i])}
`;


}

module.exports = generateMarkdown;
