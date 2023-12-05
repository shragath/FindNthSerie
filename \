import '@testing-library/jest-dom';
// import { render } from "@testing-library/react"
import Equations from './types';

describe('Test Equations', () => {
    it('Test n Fibonacci serie, should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55].', () => {
        const n = Array.from(Array(11).keys());
        const fibonacci = n.map((i) => {
            return new Equations(i).findNthFibonacci(i);
        });

        expect(fibonacci).toEqual<number[]>([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
    });

    it('Test n Triangular Serie, should return [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55]', () => {
        const n = Array.from(Array(11).keys());
        const triangular = n.map((i) => {
            return new Equations(i).findNthTriangular(i);
        });

        expect(triangular).toEqual<number[]>([
            0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
        ]);
    });

    it('Test n Prime number, should return [0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 55, 29]', () => {
        const n = Array.from(Array(11).keys());
        const primo = n.map((i) => {
            return new Equations(i).findNthPrimo(i);
        });

        expect(primo).toEqual<number[]>([0, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    it('Test n serie number', () => {
        const n = Array.from(Array(10).keys());

        const serie = n.map((i) => {
            return new Equations(i).findNthSerie();
        });

        expect(Array.isArray(serie)).toBe(true);
    });
});
