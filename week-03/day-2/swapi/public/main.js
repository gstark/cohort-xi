const addPeopleToPage = people => {
  // use our friend forEach to go through all the 'results'
  people.forEach(person => {
    // get the people UL dom object
    let people = document.querySelector('.people')

    // make an LI
    let personLI = document.createElement('li')

    // Assign the textContent of that LI to the current persons name

    let personNameLink = document.createElement('a')
    personNameLink.href = `https://google.com?q=${person.name}`
    personNameLink.textContent = `${person.name} is current on the craft ${
      person.craft
    }`

    personLI.appendChild(personNameLink)

    // append that LI to the people UL
    people.appendChild(personLI)
  })
}

const main = () => {
  // Use People-in-Space API to fetch a list of people
  fetch('http://api.open-notify.org/astros.json')
    // IOU for the response
    .then(response => {
      return response.json()
    })
    // IOU for the JSON data
    .then(peopleAsJSON => {
      addPeopleToPage(peopleAsJSON.people)
    })
  console.log('HELLO THERE!')

  let button = document.querySelector('.search-button')
  let searchInput = document.querySelector('.search')
  searchInput.value = localStorage.getItem('searchText')

  button.addEventListener('click', event => {
    let searchInputValue = searchInput.value
    console.log(searchInputValue)
    localStorage.setItem('searchText', searchInputValue)
  })
}

//

document.addEventListener('DOMContentLoaded', main)
