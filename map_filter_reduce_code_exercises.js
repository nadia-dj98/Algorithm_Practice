
// Square the value of every element in the array. 
//Presume that you will only get numbers in the input array.

const input = [1, 2, 3, 4, 5];

const squareValues = input.map(x => x**2);

console.log(squareValues);

//otherway

const squareVals2 = input.map(function(num) {
    return Math.pow(num, 2)
})

 console.log(squareVals2)


//sum of every positive element
//If the given input is an array of numbers, return the sum of all the positives ones. 
//If the array is empty or there aren't any positive numbers, return 0.

const values = [1, -4, 12, 0, -3, 29, -150];


//first filter the array to only have postive elements/numbers

const positiveValues = values.filter(value => value > 0);

//then accumulate the numners using reduce method

const accumulatedValues = positiveValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(accumulatedValues);

//shorter way to reduce code

const accumulatedVals2 = values.filter((value) => value > 0).reduce((accumulator, currentValue) => accumulator + currentValue,0) 

console.log(accumulatedVals2)


//Calculate median and mean
//Calculate the mean and median values 
//of the number elements from the input array.

const numbers = [12, 46, 32, 64];

//mean
const mean = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length

console.log(mean)

