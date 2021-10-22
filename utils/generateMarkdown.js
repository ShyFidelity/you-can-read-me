


// function to render license badge 
function renderLicenseBadge(license) {
 if (license !== "None") {
   return `![](https://img.shields.io/badge/license-${license}-blue.svg)`;
 } return ' ';

}

function renderLicenseLink(license) {
  let lApache = '(https://www.apache.org/licenses/LICENSE-2.0)';
  let lMIT = '(https://opensource.org/licenses/MIT)';
  let lMozilla = '(https://www.mozilla.org/en-US/MPL/2.0/)';
  let lArtistic = '(https://opensource.org/licenses/Artistic-2.0)';
  let LOliva = '(https://www.youtube.com/watch?v=ZmDBbnmKpqQ)';

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

function renderLicenseSection(license) {
  if (license !== "None") {
    return `
Copyright: ${license}
[License link]${renderLicenseLink(license)}`;
    
  }
}


function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## GitHub Username and link
## Table of Contents
* [Description](#Description) 
* [Motivation](#Motivation)
* [How to Use](#Usage)
* [Contributors](#Contributors) 
* [Test](#Test)
* [Dependencies](#dependencies)
* [Questions](#questions)
  
## [Description](#Description)  📝
  ${data.description}
## [Motivation](#Motivation) 🤽‍♂️
  ${data.motivation}
## [How to Use](#Usage) 
  ${data.usage}
## [Contributors](#Contributors)🏆
  ${data.contributors}
## [Test](#Test)🎯
  ${data.test}
## [Dependencies](#dependencies)
  ${data.dependencies}
## [Questions](#questions)📟
  Find me on Github! 
  [${data.username}](https://github.com/${data.username}/)
  or you can email me at ${data.email}
## License
${renderLicenseSection(data.license)}
`;


}

module.exports = generateMarkdown;
