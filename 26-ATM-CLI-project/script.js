// 1. Ask for accout
// 2. If account does not exist ask to create account
// 3. Ask what they want to do
// 4. Execute command
//  a. View
//  b. Withraw
//  c. Deposit

// Account
const Account = require('./Account');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Which account would you like to access?", answer => {
    console.log(answer);
})