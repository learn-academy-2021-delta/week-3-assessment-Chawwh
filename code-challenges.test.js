// ASSESSMENT 3: Coding practical questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// test written
// OMG first test failed! Woohoo!~

describe("fibonacci sequence", () => {
    test("should take in a number greater than 2 and return an array that length containing the number of the fib sequence", () => {
        expect(fibMkr(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibMkr(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

// Alrighty soooo Begin by declaring a function fibMkr that takes in a number as a parameter
// Declare a variable numArr that equals an array the length of num -1
// Declare a variable fibArr that equals [1,1] to start off our fibonacci sequence
// Conditional if num is less than or equal to 1
// Return "Enter a number greater than 1"
// Else for loop for iteration
// add up fibArr[i] and the index directly before it and push the sum to fibArr
// Return fibArr


const fibMkr = (num) => {
    let numArr = []
    numArr.length = num - 1
    let fibArr = [1,1]
    if(num === 1){
        return "Enter a number greater than 1."
    } else {
   for(let i=1; i < numArr.length; i++){
      fibArr.push(fibArr[i-1] + fibArr[i])
   }
   return fibArr
  }
}
  console.log(fibMkr(6));

//   IT PASSES!!! YES!!! I'm slightly unhappy with my code because any number less than or equal to 0 results in an error which I guess is fine because an array can't have negative indexes anyway
// This code was extremely challenging for me because I had no prior knowledge of what the heck liar focaccia even is But I still pushed through!


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
// if(test === "written"){
    // run test to fail!
// }


describe('odds from least to greatest', () =>{
    test('takes in an array and returns a new array of only odd numbers sorted from least to greatest', () =>{
        expect(odds(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(odds(fullArr2)).toEqual([-823, 7, 23])
    })
})



var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
// Declare a function called odds that takes in arrays as a parameter
// Declare a variable oddOnly equal to an empty array for storing our odd numbers later
// For loop for iteration
// Conditional if array[i] % 2 does not equal 0
// push array[i] into oddOnly
// Return oddOnly sorted from least to greatest AND filtering typeof by 'number'

const odds = (array) => {
    let oddOnly = []
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 !== 0){
            oddOnly.push(array[i])
        }
    } return oddOnly.sort((a, b) => a - b).filter(value => typeof value === "number")
}
console.log(odds(fullArr1));
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
// My brain is so fried that I forgot to add the tea bag to my tea. I've been drinking warm water for the last half hour.
// Test written
// Crazy=Genius && Test=Failed

describe("add the sum of numbers", () => {
    test("takes in an array and returns an array of the accumulating sum", () => {
        expect(addSumNums(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addSumNums(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(addSumNums(numbersToAdd3)).toEqual([])
    })
})

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

// Declare a function called addSumNums that takes in an array as a parameter
// return the array using .map for iteration
// .map should start at index 0 then take the sum and assign it to the next value, then take the sum and add it with that value

const addSumNums = (array) => {
  return array.map((sum => value => sum += value)(0))
}
console.log(addSumNums(numbersToAdd2));

// #3 made me want to cry
// I had nested for loops and if statements at first and I was like EwMG so chaotic and messy! SOooOo I did a google research deep dive and found .map can use math properties! Thanks Stackoverflow!

// I'm not as proud of my assessment this week as I've been the last 2 weeks... I think I'm gonna go take a nap then study more...