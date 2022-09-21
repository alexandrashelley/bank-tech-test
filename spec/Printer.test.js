const Printer = require("../lib/Printer");
const printer = require("../lib/Printer");

describe("the Printer object", () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
  });

  it("returns input object", () => {
    const printer = new Printer();
    const fakeTransaction = [
      {
        date: new Date(),
        credit: null,
        debit: 1000,
        balance: 1000,
      },
    ];

    expect(printer.formatStatement(fakeTransaction)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: new Date(),
          credit: null,
          debit: 1000,
          balance: 1000,
        }),
      ])
    );
  });
});
