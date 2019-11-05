// Find the difference between the sum of the squares of 
// the first hundred natural numbers, and the square of the sum.

const sumOfSquares = () => {
  var squareOfSum = 0
	var sumOfSquare = 0
	var difference = 0

	for (var i = 1; i < 101; i++) {
	    squareOfSum += i
	    sumOfSquare += i * i
	}

	squareOfSum = squareOfSum * squareOfSum
	difference = squareOfSum - sumOfSquare
	console.log(difference)
	return difference;
}

sumOfSquares();            