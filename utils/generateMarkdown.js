// const fs = require('fs');
// const inquirer = require('inquirer');
// const index = require('../index.js');


function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
      badge = '![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
  } else if (license === 'Apache 2.0') {
      badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ""
  }
  return badge;
}


function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ""
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license} `
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}
  ## Table of Contents:
  ###  [Installation](#installation)
  ###  [Usage](#usage)
  ###  [License](#license)
  ###  [Contributors](#contributors)
  ###  [Tests](#tests)
  ###  [Questions](#questions)
  ## Installation:
  ### Please install the following for the app to function:
  ### ${data.installation}
  ## Usage:
  ### ${data.usage}
  ## Contributors:
  ### ${data.contributions}
  ## Tests:
  ### Please run the following commands to test:
  ### ${data.tests}
  ## Questions:
  ### For additional questions, please contact me at 
  ### Github: https://github.com/${data.userName}
  ### or
  ### Email: ${data.email}

`;
}

module.exports = generateMarkdown;
