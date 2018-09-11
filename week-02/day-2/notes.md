JavaScript
- Variables
  - let
    - assigns a value to a variable
    - ex:   let name = 'Gavin'
    - ex:   let favoriteNumber = 42
  - const
    - assigns a value to a variable that cannot be reassigned
    - ex:   const mySchool = `Suncoast Developers Guild`
    - ex:   const pi = 3.14159265
- Math
  - let doubleNumber = favoriteNumber * 2
  - let wowName = name + '!'
- Functions
  - Allow us to give behavior (statement or multiple statements) a name
  - example:
      function greet(name) {
        console.log(`Hello ${name}`)
      }
  - example:
      const greet = (name) => {
        console.log(`Hello ${name}`)
      }
  - These are basically the same
- Accessing the DOM (Document Object Model)
  - Getting an element by selector
    - ex: document.querySelector('h1')
    - ex: document.querySelector('.posts')
    - ex: document.querySelector('li .recipies')
  - querySelector finds the *first* element that matches the selector
  - Now we can ask this element/variable to do work
    - ex: let post = document.querySelector('.posts')
          post.textContent = 'Wow'
  - Can also set an "Event Listener" to respond to events (e.g. 'click')
    - ex:
          let post = document.querySelector('.posts')
          let handleClick = (event) => {
            event.target.textContent = 'I was clicked on'
          }
          post.addEventListener('click', handleClick)

Resources:
  - [JavaScript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
  - [Browser events](https://developer.mozilla.org/en-US/docs/Web/Events)
  - document api:
    - [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    - [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

