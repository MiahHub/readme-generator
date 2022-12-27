class MarkDown {

  static renderLicenseBadge(license) {
    const badges = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    return badges[license]
  }

  static renderLicenseLink(license) {
    const licenseLinks = {
      mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      gnuplv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    return licenseLinks[license]
  }

  static renderLicenseSection(license) {
    if (license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license.`
    } else {
      return ''
    }
  }

  static generateReadme(values) {
    return `
# ${values.title}

${this.renderLicenseBadge(values.license)}


## Table of Contents
- [Project description](#Description)
- [Project motivation](#Motivation)
- [Project why](#Why)
- [Project problem](#Problem)
- [Project learn](#Learn)
- [Project installation](#Installation)
- [Project usage](#Usage)
- [Project contributing](#Contributing)
- [Project testing](#Testing)
- [Project email](#Email)
- [Project github](#GitHub)
- [Project credits](#Credits)
- [Project license](#License)

## Description
${values.description}

## Usage
${values.usage}

## Installation
${values.usage}

## Contributions
${values.contributions}

## Questions
${values.email}
${values.github}

## License
${this.renderLicenseSection(values.license)}
`
  }
}




  
module.exports = MarkDown
  