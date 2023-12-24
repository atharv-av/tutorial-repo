function generateFibonacci(n) {
  let fibonacciSeries = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibonacciSeries.push(i);
    } else {
      fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }
  }

  return fibonacciSeries;
}

const fibonacciSeriesUpTo10 = generateFibonacci(10);
console.log("Fibonacci series up to the 10th term:", fibonacciSeriesUpTo10);
