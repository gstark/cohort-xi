// Breaking the problem down

// 1) count the positive numbers
// -- start the counter at zero
// -- go through each number one at a time
//    -- start an index at 0
//    -- the number to work with is the element at position "index"
//    -- use that number
//    -- when done with the number, increment the index by one
//    -- see if we went past the end of the array. If so, stop
//    -- otherwise go back to the step "use that number"
// -- if that number is positive, add one to a counter
// -- if that number is not positive, ignore it
// -- keep going until we run out of numbers
// -- our answer is that counter


// 2) sum the negative numbers
// -- start a sum at 0
// -- go through each number one at time
// -- if that number is negative, add the number to sum
// -- if that number is not negative, do nothing / ignore it
// -- keep going until we run out of numbers
// -- our answer is that sum


// return an array with the answer from problem 1 and the answer from problem 2

function countPositivesSumNegatives(input) {
  // 0) if the array is empty or null, return an empty array
  if (input === null || input.length === 0) {
    let emptyArray = []
    return emptyArray
  }
    
  // 1) count the positive numbers
  // -- start the counter at zero
  let counter = 0
  // -- go through each number one at a time
  //    -- start an index at 0   "INITIALIZER"
  //    -- the number to work with is the element at position "index"   "CODE INSIDE THE BRACES"
  //    -- use that number                                              "CODE INSIDE THE BRACES"
  //    -- when done with the number, increment the index by one        "INCREMENTER"
  //    -- see if we went past the end of the array. If so, stop        "COMPARISON"
  //    -- otherwise go back to the step "use that number"
  for(let index = 0; index < input.length; index++) {
    // -- if that number is positive, add one to a counter
    if (input[index] > 0) {
      counter++
    }
  }
  // -- our answer is that counter

  // 2) sum the negative numbers
  // -- start a sum at 0
  let sum = 0
  // -- go through each number one at time
  for(let index = 0; index < input.length; index++) {
    // -- if that number is negative, add the number to sum
    let element = input[index]
    if (element < 0) {
      sum += element
    }
  }
  // -- our answer is that sum
  
  return [counter, sum];
}
