import Equations from "./types";

// - test fibonacci
// - test triangular
// - test prime number

describe("Get n fibonacci number", () => {
  it("n = 20, should return 6765", () => {
    const fib = new Equations(10).findNthFibonacci(20);
    expect(fib).toBe(6765);
  });
});
