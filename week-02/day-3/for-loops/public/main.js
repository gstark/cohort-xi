const outputAnInstructor = instructorListItem => {
  console.log('It works using forEach and a named function', instructorListItem)
  instructorListItem.textContent += '!'
}

const main = () => {
  const instructors = document.querySelectorAll('li')

  // looping through all the elements we got back from querySelectorAll
  for (let index = 0; index < instructors.length; index += 1) {
    console.log('It works using a for loop', instructors[index])
    instructors[index].textContent += '?'
  }

  instructors.forEach(
    /*
    The next thing here is an anonymous function.
    It works the same way as outputAnInstructor except
    we don't have to make a variable to store the function
    */
    instructorListItem => {
      console.log(
        'It works using forEach and an anonymous function',
        instructorListItem
      )
      instructorListItem.textContent += '~'
    }
    /*
      The function is above
    */
  )

  instructors.forEach(outputAnInstructor)

  // What Javascript is doing for us (longhand)
  // let index = 0
  //
  // if (index < instructors.length) {
  //   console.log('It works!', instructors[index])
  // }
  //
  // index += 1
  //
  // if (index < instructors.length) {
  //   console.log('It works!', instructors[index])
  // }
  //
  // index += 1
  //
  // if (index < instructors.length) {
  //   console.log('It works!', instructors[index])
  // }
  //
  // index += 1
  //
  // if (index < instructors.length) {
  //   console.log('It works!', instructors[index])
  // }
}

document.addEventListener('DOMContentLoaded', main)
