// I want a class that can accept an array of numbers
// and give me back the positive ones and the negative ones
// *separately*

class NumberSeparator {
  // Called when we make a new instance of this class
  constructor(numbers) {
    // We need this, keep a copy!
    this.ourNumbers = numbers
  }

  // giveMePositives() {
  //   // Ooops, this looks like a filter
  //   let positives = []
  //   for(let index = 0; index < this.ourNumbers.length; index++) {
  //     let element = this.ourNumbers[index]
  //     if (element > 0) {
  //       positives.push(element)
  //     }
  //   }

  //   return positives
  // }

  // giveMePositives() {
  //   // Ooops, this looks like a filter
  //   let positives = []
  //   this.ourNumbers.forEach(number => {
  //     if (number > 0) {
  //       positives.push(number)
  //     }
  //   })
  //   return positives
  // }

  // giveMePositives() {
  //   // Ooops, this looks like a filter
  //   let positives = this.ourNumbers.filter(number => {
  //     return (number > 0)
  //   })

  //   return positives
  // }

  giveMePositives() {
    return this.ourNumbers.filter(number => (number > 0))
  }


  giveMeNegatives() {
    return this.ourNumbers.filter(number => (number < 0))
  }
}








// fetch(url).then(response =>
//   return response.json()
// ).then(json => {
//    // now I can work with JSON
// })
// main => addEventListener => click => fetch => then RESPONSE => then JSON => JSON! => WeatherAPI => temperature

class WeatherAPI {
  constructor(json) {
    this.json = json
  }

  temperature() {
    return json.main.temp
  }

  humidity() {
    return json.main.humidity
  }

  averageTempThisWeek() {
    return json.forecast.reduce((total, temp) => total + temp) / json.forecast.length
  }
}



// this is the numbers we to separate
let array1 = [0, -1, 2, -3, 4, -5]

// Make a new INSTANCE of the NumberSeparator and give it the numbers to work on
let separator = new NumberSeparator(array1)

// Ask that instance for the positives!
let positives = separator.giveMePositives()

// Log them
console.log(positives)

// Ask that instance for the negatives!
let negatives = separator.giveMeNegatives()

// Log them
console.log(negatives)














