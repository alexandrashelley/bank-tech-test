const Printer = require("../lib/Printer");

describe("the Printer object", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("prints empty header", () => {
    const printer = new Printer();
    expect(printer.printHeader()).toBe("date || credit || debit || balance\n");
  });

  it("prints header and one transaction", () => {
    const fakeTransaction = [
      {
        date: new Date(),
        credit: null,
        debit: 1000,
        balance: 1000,
      },
    ];
    const printer = new Printer(fakeTransaction);

    expect(printer.formatStatement()).toContain(
      "date || credit || debit || balance\n",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || || 1000 || 1000"
    );
  });

  it("prints header and two transactions", () => {
    const fakeTransactions = [
      {
        date: new Date(),
        credit: null,
        debit: 1000,
        balance: 1000,
      },
      {
        date: new Date(),
        credit: 500,
        debit: null,
        balance: 2000,
      },
    ];
    const printer = new Printer(fakeTransactions);

    expect(printer.formatStatement()).toContain(
      "date || credit || debit || balance\n",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || || 1000 || 1000",
      "Wed Jan 01 2020 00:00:00 GMT+0000 (Greenwich Mean Time) || 500 || null || 2000"
    );
  });
});
