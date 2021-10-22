const fs = require('fs');

module.exports = class Account {
  constructor(name) {
    this.name = name;
  }

  #name
  #balance

  get name() {
    return this.#name;
  }

  get balance() {
    return this.#balance;
  }

  get filePath() {
    return `accounts/${this.name}.txt`
  }

  #load() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.filePath, (err, data) => {
        if(err) console.log(err)
        this.#balance = parseFloat(data);
        resolve()
      })
    })
  }

  async static find(accountName) {
    const account = new Account(accountName);

    await account.#load()
  }
};
