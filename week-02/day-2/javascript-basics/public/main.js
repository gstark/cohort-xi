// keep track of how many times we have been clicked
let clickCount = 0

// little function called clicky that just console logs a message
const clicky = event => {
  // Long hand
  // clickCount = clickCount + 1

  // short hand
  clickCount += 1

  let message = `Hey, we clicked ${clickCount} times`

  console.log(event.target)

  // event.target is the thing that caused the event that caused the function
  event.target.textContent = message
}

// Defines a function, calls it 'main'
// but does *NOT* execute it yet
//
// Tells javascript to rember this function and
// refer to it anytime someone references the variable
// called main
const main = () => {
  // matchingElements has a list of elements
  let matchingElements = document.querySelectorAll('.huh')

  // set lastElement variable to the thing at index 1 (the second element)
  let lastElement = matchingElements[1]

  // For that element, add a question mark
  lastElement.textContent += '?'

  // Hey, document, give me the very first button on the page
  // by using a CSS selector to match
  let button = document.querySelector('button.first')

  // Tell that button, when you are clicked, call the function clicky
  button.addEventListener('click', clicky)

  let button2 = document.querySelector('button.second')
  button2.addEventListener('click', clicky)

  let button3 = document.querySelector('button.third')
  button3.addEventListener('click', clicky)
}

// Tell the document (our page), once you are loaded
// please go do the behavior in whatever function is
// stored in the variable called main
document.addEventListener('DOMContentLoaded', main)
