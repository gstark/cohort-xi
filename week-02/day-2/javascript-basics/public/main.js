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
}

// Tell the document (our page), once you are loaded
// please go do the behavior in whatever function is
// stored in the variable called main
document.addEventListener('DOMContentLoaded', main)
