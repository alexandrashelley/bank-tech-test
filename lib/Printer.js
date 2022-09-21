class Printer {
  constructor(arrayOfTransactions) {
    this.arrayOfTransactions = arrayOfTransactions;
  }

  printHeader() {
    return "date || credit || debit || balance\n";
  }

  formatStatement() {
    let str = "";
    this.arrayOfTransactions.forEach((transaction) => {
      if (transaction.debit === null) {
        str += `${transaction.date} || ${transaction.credit} || || ${transaction.balance}\n`;
      } else {
        str += `${transaction.date} || || ${transaction.debit} || ${transaction.balance}\n`;
      }
    });
    return this.printHeader().concat(str);
  }
}

// const printer = new Printer(transaction);
// console.log(printer.formatStatement());
module.exports = Printer;