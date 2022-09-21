const BankAccount = require(".././lib/bankAccount");

describe("the BankAccount object", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("getting the balance returns a value of 0", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.balance).toBe(0);
  });

  it("depositing an amount of 1000 returns a value of 1000", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    expect(bankAccount.balance).toBe(1000);
  });

  it("depositing 1000 then withdrawing 500 returns a value of 500", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    bankAccount.withdraw(500);
    expect(bankAccount.balance).toBe(500);
  });

  it("withdrawing an amount greater than what is in the account throws error message", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.withdraw(500)).toBe(
      "You do not have the sufficient funds in your account to support this transaction."
    );
  });

  it("depositing an amount greater than 5000 throws error message", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.deposit(5001)).toBe(
      "There is a deposit limit of 5000 per transaction. Please deposit a smaller amount."
    );
  });

  it("when making a deposit, returns object containing all headers (date, debit, credit, blaance) and values", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(500);
    expect(bankAccount.transactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: new Date(),
          credit: null,
          debit: 500,
          balance: 500,
        }),
      ])
    );
  });

  it("when making a withdrawl, returns object containing all headers (date, debit, credit, balance) and values", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(500);
    bankAccount.withdraw(500);
    expect(bankAccount.transactions).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: new Date(),
          credit: 500,
          debit: null,
          balance: 0,
        }),
      ])
    );
  });

  it("prints basic statement/object to terminal", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(500);
    expect(bankAccount.print()).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: new Date(),
          credit: null,
          debit: 500,
          balance: 500,
        }),
      ])
    );
  });

  it("throws error if user tries to print a bank statement with no prior transactions", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.print()).toBe(
      "You do not have any transactions in your history"
    );
  });
});
