// In a list of the first six prime numbers: 
// 2, 3, 5, 7, 11, and 13, the 6th prime number is 13.

// What is the 10001st prime number?

const isPrime = (n) => {

  if (n < 2)
    return false;

  if (n % 2 === 0)
    return n === 2;

  if (n % 3 === 0)
    return n === 3;

  var h = Math.floor(1 + Math.sqrt(n));
  var i = 5;

  while (i <= h) {
    if (n % i === 0)
      return false;
    if (n % (i + 2) === 0)
      return false;
    i+= 6;
  }
  return true;
}

const solution = (L) => {

  var c = 2;
  var n = 0;

  while (c < L) {

    n+= 6;

    if (isPrime(n + 1)) {
      c++;
    }

    if (isPrime(n - 1)) {
      c++;
    }
  }
  // Add one for the final prime being of the form 6k + 1
  return n + 1;
}
console.log(solution(10001));