// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
 if (license !== "None") {
   return `![](https://img.shields.io/badge/license-${license}-blue.svg)`;
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

  // let linkArray = [lApache,lMIT,lMozilla,lArtistic,LOliva];
  switch (license){
    case 'ApacheLicense2.0': 
    return lApache
    case 'MIT':
    return lMIT
    case 'MozillaPublicLicense2.0':
    return lMozilla
    case 'ArtisticLicense2.0':
    return lArtistic
    case 'OliviaRodrigoDriversLicense':
    return LOliva;
    default:
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `
Copyright: ${license}
[License link]${renderLicenseLink(license)}`;
    
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
## Table of Contents
* [Description](#Description) 
* [Motivation](#Motivation)
* [Installation](#Installation)
* [How to Use](#Usage)
* [Contributors](#Contributors) 
* [Test](#Test)
* [Dependencies](#dependencies)
* [Questions](#questions)
  
## Description 📝
  ${data.description}
## Motivation 🤽‍♂️
  ${data.motivation}
## Installation
  ${data.dependencies}
## Usage 
  ${data.usage}
## Contributors🏆
  ${data.contributors}
## Test🎯
  ${data.test}
## Dependencies
  ${data.dependencies}
## Questions📟
  Find me on Github! 
  [${data.username}](https://github.com/${data.username}/)
  or you can email me at ${data.email}
## License
${renderLicenseSection(data.license)}
`;


}

module.exports = generateMarkdown;
