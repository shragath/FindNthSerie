class Equations {
  n: number;

  constructor(n: number) {
    this.n = n;
  }

  serie(): number {
    return (
      2 * this.findNthFibonacci(this.n - 2) +
      3 * this.findNthTriangular(this.n - 2) -
      7 * this.findNthPrimo(this.n - 2)
    );
  }

  findNthFibonacci(n: number): number {
    if (n < 2) {
      return n;
    } else {
      const u = (1 + Math.sqrt(5)) / 2;
      const j = (Math.pow(u, n) - Math.pow(1 - u, n)) / Math.sqrt(5);
      return Math.round(j);
    }
  }

  findNthTriangular(n: number): number {
    if (n <= 0) {
      return 0;
    }
    return (n * (n + 1)) / 2;
  }

  findNthPrimo(n: number): number {
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
