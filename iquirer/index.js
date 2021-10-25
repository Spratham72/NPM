var inquirer = require('inquirer');
inquirer
  .prompt([
    {name: 'username',
    message: 'What your username?',
    type: 'input'},
    {name: 'password',
    message: 'What your password?',
    type: 'password'}
  ])
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
