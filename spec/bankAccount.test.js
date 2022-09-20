const BankAccount = require(".././lib/bankAccount");

describe("the BankAccount object", () => {
  it("getting the balance returns a value of 0", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getBalance()).toBe(0);
  });

  it("depositing an amount of 1000 returns a value of 0", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    expect(bankAccount.getBalance()).toBe(1000);
  });
});
