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
      "01/01/2020 || || 1000 || 1000"
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
      "01/01/2020 || || 1000 || 1000",
      "01/01/2020 || 500 || || 500"
    );
  });

  it("calling the print method from the bank account class with no transactions in history throws error", () => {
    const bankAccount = new BankAccount();

    const printer = new Printer(bankAccount.transactions);
    printer.formatStatement();

    expect(bankAccount.print()).toBe(
      "You do not have any transactions in your history"
    );
  });
});
