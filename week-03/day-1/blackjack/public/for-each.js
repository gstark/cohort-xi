// sum those scores

// Algorithm for adding up the elements (numbers) of an array
// ----------------------------------------------------------
// 1. start at the first number
// 2. set our total to zero
// 3. add this number to the total
// 4. move to the next number
// 5. if we are at the end of all numbers STOP
// 6. otherwise go back to step 3

//        for( initializer ;   comparison   ;  incrementer  ) {
//               WORK
//        }
//

// Rules for arrow function
// - no arguments,    ()
// - one argument,    argumentName
// - more than one,   (firstArgument, secondArgument)

//    name-of-function         argument(input)
const addsUpAnArrayOfNumbers = arrayOfNumbers => {
  // start with a total of 0
  let total = 0

  // loop through each element of the array
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    total += arrayOfNumbers[index]
  }

  //    add that element's value to total
  return total
}

let scores = [14, 98, 100, 200, 45, 66]

let verboseTotal =
  scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5]

let total = 0
//   initial        keep going?            increment
for (let index = 0; index < scores.length; index += 1) {
  total += scores[index]
  // This happens every time the loop LOOPSk
  console.log('The total so far is', total)
}

// This happens when the loop is done!
console.log('The total at the end is', total)

let scoresTotal = addsUpAnArrayOfNumbers(scores)
console.log('The answer, using our new function is ', scoresTotal)

let arrayTotal = addsUpAnArrayOfNumbers([42, 42, 42, 42])
console.log('This better be 168', 168)

// Longhand
//       // 1. start at the first number
//       let index = 0
//       // 2. set our total to zero
//       let total = 0
//       // 3. add this number (at the index) to the total
//       // total = total + scores[index]
//       total += scores[index]
//       // 4. move to the next number
//       index += 1
//       // 5. if we are at the end of all numbers STOP
//       if (index >= scores.length) {
//         console.log(total)
//       }
//       else {
//         // ????
//       }
//       // 6. otherwise go back to step 3

// Generic algorithm to do work (stuff) with an array

// for index = 0 up to the length of the array
//   make the variable element = that index of the array
//   do work(stuff) with that element
// DONE

//    function-name      array  work-to-do
//        |                |      |
//        v                v      v
const suncoastForEach = (array, work) => {
  // for index = 0 up to the length of the array
  for (let index = 0; index < array.length; index += 1) {
    // make the variable element = that index of the array
    let element = array[index]

    // do work(stuff) with that element
    work(element)
  }
}

let arrayOfThings = [12, 42, 100, 98]

const printOutAThing = thing => {
  console.log(thing)
}

let thingTotal = 0
const addUpTheThings = thing => {
  thingTotal += thing
}

let thingProduct = 1
const multiplyAllTheThings = thing => {
  thingProduct *= thing
}

suncoastForEach(arrayOfThings, printOutAThing)
suncoastForEach(arrayOfThings, addUpTheThings)
console.log(thingTotal)

suncoastForEach(arrayOfThings, multiplyAllTheThings)
console.log(thingProduct)

arrayOfThings.forEach(printOutAThing)
thingTotal = 0
arrayOfThings.forEach(addUpTheThings)
console.log(thingTotal)

thingProduct = 1
arrayOfThings.forEach(multiplyAllTheThings)
console.log(thingProduct)

arrayOfThings.forEach(thing => {
  console.log(`for each with an anonymous function got a ${thing}`)
})

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
