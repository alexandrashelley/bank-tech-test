class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if (amount <= 5000) {
      this.balance += amount;
    } else {
      return "You have exceeded the deposit limit of 5000. Please deposit a smaller amount.";
    }
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      return "You do not have the sufficient funds in your account to support this transaction.";
    }
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
