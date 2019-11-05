// Find the sum of all the primes below two million.

const sumPrimes = (num) => {
  const primes = [];
  const filteredArr = [];
  let i;
  let j;
  for (i = 2; i <= num; i++) {
    if (!filteredArr[i]) {
      primes.push(i);
      // j = i << 1; is same as multiples of i and j = i. So the number that is passed over
      // in the inside loop is the prime number. And that refers back to !filteredArr[i].
      for (j = i * 2; j <= num; j += i) {
        filteredArr[j] = true;
      }
    }
  }
  return primes.reduce((a, b) => a + b);
}
console.log(sumPrimes(2000000));