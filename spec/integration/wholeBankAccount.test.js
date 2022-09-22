const BankAccount = require("./../../lib/bankAccount");
const Printer = require("./../../lib/Printer");

describe("the whole bank account", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("calling the print method from the bank account class with one transaction in history prints formatted transaction and header", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);

    const printer = new Printer(bankAccount.transactions);
    printer.formatStatement();

    expect(bankAccount.print()).toContain(
      "date || credit || debit || balance\n",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || || 1000 || 1000"
    );
  });

  it("calling the print method from the bank account class with two transactions in history prints formatted transactions and header", () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    bankAccount.withdraw(500);

    const printer = new Printer(bankAccount.transactions);
    printer.formatStatement();

    expect(bankAccount.print()).toContain(
      "date || credit || debit || balance\n",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || || 1000 || 1000",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || 500 || || 500"
    );
  });
});
