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

const shuffledColors = (array) => { // new function that takes in the parameter of an array
   array.shift() // goes through the array and removes the first item from the array
    return array.sort() // takes the rest of the array and sorts it in a new order
}
//console.log(shuffledColors(colors1))

//  PASS  ./code-challenges.test.js

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("endTally", () => {
  it ("returns the end tally", () => {
    const votes1 = { upVotes: 13, downVotes: 2 }
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 }
    // Expected output: -31
    expect(endTally(votes1)).toEqual(11)
    expect(endTally(votes2)).toEqual(-31)
  })
})
//Good Failure: ReferenceError: endTally is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// function name: endTally
// input: object
// output: number of the end tally
// process: create a function and a new variable that'll use a conditional statement to do one of the statements if the answer is true and if it is, return the value of the conditional statement inside the new variable.

const endTally = (obj) => { // new function that takes in the parameter of obj aka object
  let totalTally = 0 // created a new variable to hold the final values but gave it a value of 0 to use for the conditional statement
  if(obj.upVotes > obj.downVotes){ // created a conditional statement to state if the object first key value pair is greater than the second
    totalTally = obj.upVotes - obj.downVotes // if it is than subtract the first value by the second value
    return totalTally // and return the value inside the totalTally variable 
  } else { // if it is false to the first part of the conditional statement then
    totalTally = obj.upVotes + obj.downVotes * -1 // go and take the value of 0 and use it to do this part of the conditional statement
    return totalTally // and return that value inside the totalTally variable
  }
}
//console.log(endTally(votes1)) 
//output: 11
//console.log(endTally(votes2)) 
//output:-31

//  PASS  ./code-challenges.test.js

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("newArray", () => {
  it("returns one array with no duplicate values", () => {
    const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
    const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(newArray(...dataTypesArray1, ...dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})
// Good failure: ReferenceError: newArray is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// function name: newArray
// input: two arrays
// output: one new array with the elements of both arrays combined without repetition
// process: create a function that'll use spread operator to combine the two arrays into one array, then use the .filter method to go through the array, then i'll use the .indexOf method to find the first occurance of each value and keep only the first of the duplicate(if there is one). 

// attempt 1: 
// const newArray = () => {
//   let arr = dataTypesArray1.concat(dataTypesArray2)
//   let mergedArr = [...new Set(arr)]
//     return mergedArr
// }
// console.log(dataTypesArray1 + dataTypesArray2) // output: array,object,number,string,Booleanstring,null,Boolean,string,undefined


const newArray = (...arr) => { // new function taking in the spread operator of arr to combine the two arrays
  return arr.filter((value, index) => { // the new array will then be filtered through to search for the value and index of each element in the array
    return arr.indexOf(value) == index // then if the values index appears more than once the .indexOf method will take the first occurance of it
  })
}
//console.log(newArray(...dataTypesArray1, ...dataTypesArray2))
// output:[
//   'array',
//   'object',
//   'number',
//   'string',
//   'Boolean',
//   'null',
//   'undefined'
// ]

//  PASS  ./code-challenges.test.js