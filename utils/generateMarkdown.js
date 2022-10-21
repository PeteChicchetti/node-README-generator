// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          <hr>
          ## Description ${data.description}
          <hr>
          ## Table of Contents ${data.table}
          * [Installation](#installation)
          * [Usage](#usage)
          * [License](#license)
          * [Contributions](#contributions)
          * [Tests](#tests)
          * [Questions](#questions)
          <hr>
          ## ${data.install}
          <hr>
          ## ${data.usage}
          <hr>
          ## ${data.license}
          <hr>
          ## ${data.contributing}
          <hr>
          ## ${data.tests}
          <hr>
          ## ${data.questions}
`;
}

module.exports = generateMarkdown;
