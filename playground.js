const arr = [1, -1, 2, 3]

// const sum = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0) 

// console.log(sum)

// a = 0, c = 1; 0 + 1 = 1
// a = 1, c = -1; = 0
// a = 0, c = 2; = 2
// a = 2, c = 3; = 5

// CLEAN UP THE CODE 

const sum = arr.reduce((accumulator, current) => (accumulator + current))

console.log(sum)

// When you don't have the accumulator number (in this example above it's 0) after the {} brackets, the accumulator
// automatically becomes the first element in the array, and the currentValue becomes the second element