// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// // test:
// describe("shuffledColors", () => {
//   it("removes the first item from the array and shuffles the remaining items.", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  //   expect(shuffledColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
  //   expect(shuffledColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  // })
  // })
  // this is my attempt at using the second part of the arrayContaining method and it wouldn't allow my test to pass so I commented it out. Looking at it, it doesn't look like i needed it to begin with but here's what I did when I tried it out. 
  // it("removes the first item from the array and shuffles the remaining items.", () => {
  //   expect(shuffledColors(["purple", "blue", "green", "yellow", "pink"])).not.toEqual(expect.arrayContaining(expected))
  //   expect(shuffledColors([
    //   "chartreuse",
    //   "indigo",
    //   "periwinkle",
    //   "ochre",
    //   "aquamarine",
    //   "saffron"
    // ])).not.toEqual(expect.arrayContaining(expected))
  // })

// // Good Failure: ReferenceError: shuffledColors is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: shuffledColors
// input: an array of colors
// output: the array minus the first item and then shuffled
// process: create a function that uses the .shift() method to remove the first item in the array, then use .sort() method that'll randomly sort the remaining elements in the array.

const shuffledColors = (array) => {
   array.shift()
    return array.sort()
}
//console.log(shuffledColors(colors1))

//  PASS  ./code-challenges.test.js

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
// use 3rd question of last weeks assessment for help 
// const accumSum = (array) => {
//   let sum = 0 
//   return array.map((value) => (sum += value)) /
// }


// a) Create a test with expect statements for each of the variables provided.
// describe("endTally", () => {
//   it ("returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
//     expect(endTally(votes1)).toEqual(11)
//     expect(endTally(votes2)).toEqual(-31)
//   })
// })
//Good Failure: ReferenceError: endTally is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// function name: endTally
// input: object
// output: number of the end tally
// process: create a function that'll use 

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("newArray", () => {
  it("returns one array with no duplicate values", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(newArray(dataTypesArray1)(dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// Good failure: ReferenceError: newArray is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: newArray
// input: two arrays
// output: one new array with the elements of both arrays combined without repetition
// process: create a function that'll use spread operator to combine the two arrays into one array and then use a nuilt-in method that'll delete all the duplicates inside the new array (...new set()). 

// attempt 1: // looked into the spread operators and though it made more sense than the .concat method so I swithced over to just doing the spread operator function.
// const newArray = () => {
//   let arr = dataTypesArray1.concat(dataTypesArray2)
//   let mergedArr = [...new Set(arr)]
//     return mergedArr
// }
// console.log(dataTypesArray1 + dataTypesArray2) // output: array,object,number,string,Booleanstring,null,Boolean,string,undefined


// attempt 2:
const newArray = (arr1, arr2) => { // function with arr1 and arr2 as parameters
  const combinedArr = [...arr1, ...arr2] // uses spread operators to combine the two arrays into one array
  const newArr = [...new Set(combinedArr)] // the new Set() created a new object that took out all the duplicates and the spread operator converted the object back into an array
  return newArr // returned what was in the newArray function
}
const finalResultsArray = newArray(dataTypesArray1, dataTypesArray2) // created a final array to hold what the newArray did and call on the test variables given 
//console.log(finalResultsArray) // console.log to make sure it all worked

// output:
// [
//   'array',
//   'object',
//   'number',
//   'string',
//   'Boolean',
//   'null',
//   'undefined'
// ]

// worked for console.log but not for Jest test