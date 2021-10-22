// 1. Ask for accout
// 2. If account does not exist ask to create account
// 3. Ask what they want to do
// 4. Execute command
//  a. View
//  b. Withraw
//  c. Deposit

// Account
const Account = require('./Account');
const CommentLine = require('./CommandLine');

async function main() {
  CommentLine.ask("Which account would you like to access?").then(response => {
    CommentLine.print(response)
  })
}

main();
