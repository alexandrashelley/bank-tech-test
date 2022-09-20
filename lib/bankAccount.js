class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      return "You do not have the sufficient funds in your account to support this transaction";
    }
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = BankAccount;
