// What is the largest prime factor of the number 600851475143?

const findLargestPrimeFactor = (number) => {
	var divisor = 2;

	while(number > 1){
		if (number % divisor === 0){
			number /= divisor;
		}else{
			divisor++;
		}
	}
	console.log(divisor);
}

findLargestPrimeFactor(600851475143);