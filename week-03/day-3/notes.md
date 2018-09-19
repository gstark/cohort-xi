- Object Oriented Programming
- Problem
  - With our current tool set, the code we write is hard to keep organized. The ideas can get lost and hard to maintain going forward
- New words
  - Class - a blueprint for representing an idea or thing in our code​​
  - Object - instance of a class;
  - Encapsulation - "hiding" how some is down from other pieces of code
  - Abstraction - putting all logic that pertains to a feature in one place
- Parts of a class
  - Constructor - what is called when an instance is created
  - this -  a reference to the current instance of the class
  - method  - a function that is defined on that the class and can only be called on a instance
- Our first class
  ```
  class Cat {
    constructor (name) {
      this.name = name
    }

    meow () {
      return this.name + ' goes meow'
    }
  }

  const main = () => {
    const _mine = new Cat('Iroh')
    console.log(_mine.meow())
  }
  ```
- More complex class
  ```
  class Cat {
    constructor (name) {
      this.name = name
      this.happiness = 0
    }

    speak () {
      if (this.happiness > 5) {
        return 'purrrrr'
      } else if (this.happiness >= 0) {
        return this.name + ' goes meoow'
      } else {
        return 'hiss'
      }
    }

    chase () {
      this.happiness -= 3
    }

    eat () {
      this.happiness++
    }

    pet (location) {
      if (location === 'behind ears') {
        this.happiness += 2
      } else if (location === 'mouth') {
        this.happiness -= 1
      } else if (location === 'butt') {
        this.happiness += 3
      }
    }
  }
  ```
- Usage
  ```
  const myCat = new Cat('Ozai')

  // add 2 to happiness
  myCat.pet('behind ears')

  // add 3 to happiness
  myCat.pet('butt')

  // add 1 to happiness
  myCat.eat()

  // will print out "purrrr"
  console.log(myCat.speak())
  ```
- more abstract class
  ```
  class ErrorMessageList {
    constructor (parentSelector) {
      this.parent = document.querySelector('.parent')
    }

    addMessage (message) {
      const msg = document.createElement('p')
      msg.textContent = message
      this.parent.appendChild(msg)
    }
  }

  // somewhere else

  const list = new ErrorMessageList('.errors')
  list.addMessage(message)
  ```

