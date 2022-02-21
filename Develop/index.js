// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
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
            type: 'input',
            name: 'contribution',
            message: ' Please specify the contribution guidelines of your project? (Required)',
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
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for the project.');
                    return false;
                }
            }
        }
    ]);
    console.log(questions);
};
    // .then(generateData => {
    //     questionData.question.push(generateData);
    //     console.log(questions);
    // }

questions()
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
