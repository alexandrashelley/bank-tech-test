const BankAccount = require("./bankAccount");

class Printer {
  constructor(arrayOfTransactions) {
    this.arrayOfTransactions = arrayOfTransactions.reverse();
  }

  header() {
    return "date || credit || debit || balance\n";
  }

  formatAndPrintStatement() {
    let str = "";
    this.arrayOfTransactions.forEach((transaction) => {
      if (transaction.debit === null) {
        str += `${transaction.date} || ${transaction.credit.toFixed(2)} || || ${transaction.balance.toFixed(2)}\n`;
      } else {
        str += `${transaction.date} || || ${transaction.debit.toFixed(2)} || ${transaction.balance.toFixed(2)}\n`;
      }
    });
    return this.header().concat(str);
  }
}

module.exports = Printer;
