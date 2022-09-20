# Bank tech test

## User Stories

```
As a user, 
So that I can make payments,
I want to withdraw money from my bank account

As a user,
So that I can save money,
I want to deposit money into my bank account

As a user,
So that I can manage my finances,
I want to print my bank statement

As a user,
So that I can manage my finances,
I want my bank statement to include the dates of my transactions

As a user,
So that I can manage my finances,
I want my bank statement to include the amount of my transactions
```
### Edge cases

* A user shouldn't be able to withdraw more than the amount in the account
* A user can only deposit 5000 at a time
* The bank statement should print the transaction history with most recent dates first

## Extracting nouns and verbs

* Nouns: bank account, bank statement, transactions
* Verbs: withdraw, deposit, print

## Class design

```
Class bankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {

  }
  
  withdraw(amount) {

  }

  getBalance() {
    
  }
}
```
```
Class bankStatement {
  constructor() {

  }

  print() {
      
  }

  format() {

  }
}

Class Transactions {
  constructor() {
    this.history = [];
  }

  saveTransaction(transaction) {
    
  }
}
```