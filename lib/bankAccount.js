const Printer = require("./Printer");

class BankAccount {
  constructor() {
    this.balance = 0;
    this.date = new Date().toLocaleDateString("en-UK");
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 5000) {
      this.balance += amount;
      this.transactions.push({
        date: this.date,
        credit: null,
        debit: amount,
        balance: this.balance,
      });
    } else {
      return "There is a deposit limit of 5000 per transaction. Please deposit a smaller amount.";
    }
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push({
        date: this.date,
        credit: amount,
        debit: null,
        balance: this.balance,
      });
    } else {
      return "You do not have sufficient funds in your account to support this transaction.";
    }
  }

  print() {
    const printer = new Printer(this.transactions);
    if (this.transactions.length > 0) {
      return printer.formatStatement();
    } else {
      return "You do not have any transactions in your history";
    }
  }
}

module.exports = BankAccount;