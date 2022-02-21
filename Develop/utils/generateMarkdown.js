// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `
    [badge](https://img.shields.io/badge/license-${license}-blue)
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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table-of-Contents

  * [Description]
  * [Installation]
  * [Usage]
  * [Contributors]
  * [Test]

  ## Installation Instructions 
  ${data.installation}

  ## Usage Information 
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution Guidelines 
  ${data.contribution}

  ## Test Instructions 
  ${data.test}


`;
}

module.exports = generateMarkdown;
