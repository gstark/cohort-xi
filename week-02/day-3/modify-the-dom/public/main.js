const main = () => {
  let button = document.querySelector('button')

  button.addEventListener('click', event => {
    let unorderdList = document.querySelector('ul')

    unorderdList.classList.toggle('hidden')
  })
}

// Same thing as a one-liner
const mainAsOneLiner = () => {
  document.querySelector('button').addEventListener('click', event => {
    document.querySelector('ul').classList.toggle('hidden')
  })
}

document.addEventListener('DOMContentLoaded', main)
