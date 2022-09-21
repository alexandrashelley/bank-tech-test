class Printer {
  constructor() {}

  printHeader() {
    return ("date || credit || debit || balance");
  }

  formatStatement(transactions) {
    return transactions;
  }
}

module.exports = Printer;
