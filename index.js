const inquirer = require('inquirer');
const MarkDown = require('./library/readmeGenerator.js');
const fs = require('fs');

// questions below:
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',

  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the project description?',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?',
  },
  {
    type: 'input',
    name: 'why',
    message: 'Why did you build this project?',
  },
  {
    type: 'input',
    name: 'problem',
    message: 'What problem did you solve in building this project?',
  },
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn in building this project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: "What is the project's intended usage?",
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How do people contribute to this project?',
  },
  {
    type: 'input',
    name: 'testing',
    message: 'Testing asets for this project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the project email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter the project github?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which project license are you applying?',
    choices: ['MIT', 'ISC', 'GNULv3'],
    filter(val) {
      return val.toLowerCase();
      }
    },
]

function runInquirer() {
  return inquirer.prompt(questions)
    .then((values) => {
      const mark = MarkDown.generateReadme(values)
      fs.writeFile('README.md', mark, function (error) {
        if (error) {
          console.log('File could not be saved', error)
        } else {
          console.log('Success!  new README.md file has been succesfully created in the current folder')
        }
      })
    })
    .catch((error) => {
      console.log(error)
  })
}

runInquirer()
