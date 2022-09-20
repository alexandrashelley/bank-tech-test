class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
