// Clase para resolver la serie de ecuaciones
class Equations {
    n: number;
    resFibonacci: number;
    resTriangular: number;
    resPrimo: number;

    constructor(n: number) {
        this.n = n;
        this.resFibonacci = this.findNthFibonacci(n - 2);
        this.resTriangular = this.findNthTriangular(n - 2);
        this.resPrimo = this.findNthPrimo(n - 1);
    }

    // Calcula serie
    findNthSerie(): number {
        return (
            2 * this.resFibonacci +
            3 * this.resTriangular -
            7 * this.resPrimo
        );
    }

    // Calcula n-ésimo fibonacci
    findNthFibonacci(n: number): number {
        if (n < 1) {
            return 0;
        } else {
            const u = (1 + Math.sqrt(5)) / 2;
            const j = (Math.pow(u, n) - Math.pow(1 - u, n)) / Math.sqrt(5);
            return Math.round(j);
        }
    }

    // Calcula n-ésimo triangular
    findNthTriangular(n: number): number {
        if (n <= 0) {
            return 0;
        }
        return (n * (n + 1)) / 2;
    }

    // Calcula n-ésimo primo
    findNthPrimo(n: number): number {
        if (n <= 0) return 0;

        const is_prime = (n: number): boolean => {
            if (n <= 1) return false;

            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) {
                    return false;
                }
            }

            return true;
        };

        let count = 0;
        let num = 2;

        while (count < n) {
            if (is_prime(num)) {
                count++;
            }
            num++;
        }

        return num - 1;
    }
}

export default Equations;
