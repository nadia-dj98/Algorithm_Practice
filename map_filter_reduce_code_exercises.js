
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