// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of 
// two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from 
// the product of two 3-digit numbers.

const isPalindrome = (num) => {
	num = num.toString().split('');
	var len = num.length;

	for(var i = 0; i < len/2; i++){
		if(num[i] !== num[len-1-i]){
			return false;
		}
	}
	return true;
}

const findLargestPalindrome = () => {
	var largest = 0;

	for(var i = 999; i > 100; i--){
		for(var j = 999; j > 100; j--){
			var mult = i*j;
			if(mult < largest){
				break;
			}
			if(isPalindrome(mult) && mult > largest){
				largest = mult;
			}
		}
	}
	console.log(largest);
	return largest;
}