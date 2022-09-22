const Printer = require("../lib/Printer");

describe("the Printer object", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("prints empty header", () => {
    const printer = new Printer([]);
    expect(printer.printHeader()).toBe("date || credit || debit || balance\n");
  });

  it("prints header and one transaction", () => {
    const fakeTransaction = [
      {
        date: new Date().toLocaleDateString("en-UK"),
        credit: null,
        debit: 1000,
        balance: 1000,
      },
    ];
    const printer = new Printer(fakeTransaction);

    expect(printer.formatStatement()).toContain(
      "date || credit || debit || balance\n",
      "01/01/2020 || || 1000 || 1000"
    );
  });

  it("prints header and two transactions", () => {
    const fakeTransactions = [
      {
        date: new Date().toLocaleDateString("en-UK"),
        credit: null,
        debit: 1000,
        balance: 1000,
      },
      {
        date: new Date().toLocaleDateString("en-UK"),
        credit: 500,
        debit: null,
        balance: 2000,
      },
    ];
    const printer = new Printer(fakeTransactions);

    expect(printer.formatStatement()).toContain(
      "date || credit || debit || balance\n",
      "01/01/2020 || || 1000 || 1000",
      "01/01/2020 || 500 || || 2000"
    );
  });

  it("prints statement with transactions in reverse order", () => {
    const fakeTransactions = [
      {
        date: "01/01/2020",
        credit: null,
        debit: 500,
        balance: 500,
      },
      {
        date: "03/01/2020",
        credit: null,
        debit: 1000,
        balance: 1500,
      },
    ];

    const printer = new Printer(fakeTransactions);
    expect(printer.formatStatement()).toContain(
      "date || credit || debit || balance\n",
      "03/01/2020 || || 500 || 1500",
      "01/01/2020 || || 1000 || 1000"
    );
  });
});
