// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const promptQuestions = () => {
    questions = [];
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter a name for the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project. (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give installation instructions for the project. (Required)',
            validate: instructionsInput => {
                if (instructionsInput){
                    return true;
                } else {
                    console.log('Please enter instructions for the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please specify usage information for your project. (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please enter a description of the project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Pick a license! (Required)',
            choices: ['agpl', 'apache', 'mit', 'no license']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please specify the contribution guidelines of your project? (Required)',
            validate: contributionInput => {
                if (contributionInput){
                    return true;
                } else {
                    console.log('Please specify the contribution guidelines for the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are your test instructions for the project. (Required)',
            validate: testInput => {
                if(testInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for the project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username? (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ])
    .then(fileName => {
        questions.push(fileName);
        return fileName;
    })
};

    // .then(generateData => {
    //     questionData.question.push(generateData);
    //     console.log(questions);
    // }

promptQuestions()
    .then(fileName => {
        const pageREADME = generateMarkdown(fileName);

        fs.writeFile('./README.md', pageREADME, err => {
            if (err) throw new Error(err);

            console.log('Created README.md. Check out README.md in this directory to see it!');
        });

    });
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
