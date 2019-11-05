// Find the sum of all the multiples of 3 or 5, below 1000.

const sumOfMultiples = (number) => {
    let sum = 0;
    for(let i=1; i<number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
        }
    }
    return sum;
}

console.log(sumOfMultiples(1000));