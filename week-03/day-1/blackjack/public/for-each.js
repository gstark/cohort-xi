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

let scores = [14, 98, 100, 200, 45, 66]

let total = 0
//   initial        keep going?            increment
for (let index = 0; index < scores.length; index += 1) {
  total += scores[index]
  // This happens every time the loop LOOPSk
  console.log('The total so far is', total)
}

// This happens when the loop is done!
console.log('The total at the end is', total)

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

//
