const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter a project title');
            return false;
        }
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
    validate: licenseInput = () => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please select one of the four options')
            return false;
            }
    }
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a project description',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('Please provide a project description');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'installation',
    message: 'What steps are needed to install your project?',
    validate: installationInput => {
        if (installationInput) {
            return true;
        } else {
            console.log('Please provide installation steps');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the use of your project?',
    validate: usageInput => {
        if (usageInput) {
            return true;
        } else {
            console.log('Please provide a use for your project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'contributions',
    message: 'What guidelines must others follow in order to contribute?',
    validate: contributionsInput => {
        if (contributionsInput) {
            return true;
        } else {
            console.log('Please enter contribution guidelines');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'tests',
    message: 'How do you test this project?',
    validate: testingInput => {
        if (testingInput) {
            return true;
        } else {
            console.log('Please explain how to test this project');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'userName',
    message: 'Please Enter Your GitHub Username',
    validate: userNameInput => {
        if (userNameInput) {
            return true;
        } else {
            console.log('Please provide a valid GitHub username');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please Enter a valid Email address',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please check if the email provided is valid');
            return false;
        }
    }
}
];

const writeToFile = readmeFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', readmeFile, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};



function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
    var readmeFile = generateMarkdown(data);
    writeToFile(readmeFile)
    });
}


init();
