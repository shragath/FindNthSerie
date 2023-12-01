import "@testing-library/jest-dom";
// import { render } from "@testing-library/react"
import Equations from "../Components/CalculateNSerie/types";

describe("Test Equations", () => {
  it("Test n Fibonacci serie, should return 55", () => {
    const n = 10;
    const expect_res = 55;

    const Fibonacci = new Equations(n).findNthFibonacci(n);

    expect(Fibonacci).toEqual<number>(expect_res);
  });

  it("Test n Triangular Serie, should return 21", () => {
    const n = 6;
    const expect_res = 21;

    const triangular = new Equations(n).findNthTriangular(n);

    expect(triangular).toEqual<number>(expect_res);
  });

  it("Test n Prime number, should return 31", () => {
    const n = 11;
    const expect_res = 31;

    const prime = new Equations(n).findNthPrimo(n);

    expect(prime).toEqual<number>(expect_res);
  });
});
