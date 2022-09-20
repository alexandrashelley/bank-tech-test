class BankAccount {
  constructor() {
    this.balance = 0;
    this.date = new Date();
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
      return "You have exceeded the deposit limit of 5000. Please deposit a smaller amount.";
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
      return "You do not have the sufficient funds in your account to support this transaction.";
    }
  }

  getBalance() {
    return this.balance;
  }

  getTransactions() {
    return this.transactions;
  }
}

module.exports = BankAccount;
