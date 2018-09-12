const clickedOnPlayerOneRock = event => {
  document.querySelector('.player-1').classList.add('choice-made')

  // Somehow remember that player 1 chose "rock"

  // log what player one choice is
  // log what player two choice is

  // Check if both players have made a choice

  // comparison operators
  // ===    equal to
  // !==    not equal to
  // >      great than
  // <      less than
  // >=     greater than or equal to
  // <=     less than or equal to

  // AND    &&
  // OR     ||

  // if both players have made a choice
  //   if player one chose rock and player two chose paper then the winner is player two
  //   if player one chose rock and player two chose rock then there is a tie
  //   blah
  //   blah
  //   blah
  //   blah
  //   blah
  //   blah
  //   blah

  document.querySelector('footer').textContent = 'Winner'
}

const main = () => {
  let player1rock = document.querySelector('.player-1 .rock')

  player1rock.addEventListener('click', clickedOnPlayerOneRock)
  //
  //
}

document.addEventListener('DOMContentLoaded', main)
