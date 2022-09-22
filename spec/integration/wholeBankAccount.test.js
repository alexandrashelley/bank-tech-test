const BankAccount = require("./../../lib/bankAccount");
const Printer = require("./../../lib/Printer");

describe("the whole bank account", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("calling the print method from the bank account class prints one transaction from history", () => {
    const bankAccount = new BankAccount();
    const printer = new Printer(bankAccount.transactions);
    bankAccount.deposit(1000);
    expect(printer.formatStatement()).toContain(
      "date || credit || debit || balance\n",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || || 1000 || 1000",
    );
  });
});
