// A Pythagorean triplet is a set of three natural numbers, 
// a < b < c, for which, a2 + b2 = c2.

// There exists exactly one Pythagorean triplet, 
// for which a + b + c = 1000. Find the product of abc.

const solution = (n) => {

  for (var c = (n / 3 + 1) | 0; c < n / 2; c++) {

    var sqa_b = c * c - n * n + 2 * n * c
    var a_b = Math.floor(Math.sqrt(sqa_b));

    if (a_b * a_b == sqa_b) {
      var b = (n - c + a_b) / 2;
      var a = n - b - c;
      return a * b * c;
    }
  }
  return -1
}
console.log(solution(1000));