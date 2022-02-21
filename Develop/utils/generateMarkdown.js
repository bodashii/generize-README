// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `
    ![badge](https://img.shields.io/badge/license-${license}-blueviolet)
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license'){
    return `
  ## [License]

  This app is covered under the listed license:

    ${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

function renderLicenseTableContents(license) {
  if (license !== 'no license') {
    return `* [License](#license)`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation-instructions)
  * [Usage](#usage-information)
  ${renderLicenseTableContents(data.license)}
  * [Contributors](#contribution-guidelines)
  * [Test](#test-instructions)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ## [Installation-Instructions](#table-of-contents)
  ${data.installation}

  ## [Usage-Information](#table-of-contents)
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contribution-Guidelines](#table-of-contents)
  ${data.contribution}

  ## [Test-Instructions](#table-of-contents) 
  ${data.test}

  ## [Questions](#table-of-contents)
  Reach out links:

  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
