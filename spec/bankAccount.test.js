const BankAccount = require(".././lib/bankAccount");

describe("the BankAccount object", () => {
  it("getting the balance returns a value of 0", () => {
    const bankAccount = new BankAccount();
    expect(bankAccount.getBalance()).toBe(0);
  });
});
