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

// test:
describe("shuffledColors", () => {
  it("removes the first item from the array and shuffles the remaining items.", () => {
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
    expect(shuffledColors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffledColors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
  })
  })
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

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Pseudo code:
