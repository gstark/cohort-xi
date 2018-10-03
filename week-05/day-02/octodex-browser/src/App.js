import React, { Component } from 'react'
import Clowder from './Clowder'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: 'cached',
      data: [
        {
          number: 144,
          name: 'Umbrellatocat',
          image: 'https://octodex.github.com//images/puddle_jumper_octodex.jpg',
          link: 'https://octodex.github.com//umbrellatocat',
          authors: [
            {
              link: 'https://github.com/rubyjazzy',
              image: 'https://github.com/rubyjazzy.png'
            }
          ]
        },
        {
          number: 143,
          name: 'Boxertocat',
          image: 'https://octodex.github.com//images/boxertocat_octodex.jpg',
          link: 'https://octodex.github.com//boxertocat',
          authors: [
            {
              link: 'https://github.com/rubyjazzy',
              image: 'https://github.com/rubyjazzy.png'
            }
          ]
        },
        {
          number: 142,
          name: 'Surftocat',
          image: 'https://octodex.github.com//images/surftocat.png',
          link: 'https://octodex.github.com//suftocat',
          authors: [
            {
              link: 'https://github.com/jeejkang',
              image: 'https://github.com/jeejkang.png'
            }
          ]
        },
        {
          number: 141,
          name: 'Hulatocat',
          image: 'https://octodex.github.com//images/hula_loop_octodex03.gif',
          link: 'https://octodex.github.com//hulatocat',
          authors: [
            {
              link: 'https://github.com/heyhayhay',
              image: 'https://github.com/heyhayhay.png'
            }
          ]
        },
        {
          number: 140,
          name: 'Scubatocat',
          image: 'https://octodex.github.com//images/scubatocat.png',
          link: 'https://octodex.github.com//scubatocat',
          authors: [
            {
              link: 'https://github.com/cameronfoxly',
              image: 'https://github.com/cameronfoxly.png'
            }
          ]
        },
        {
          number: 139,
          name: 'Vinyltocat',
          image: 'https://octodex.github.com//images/vinyltocat.png',
          link: 'https://octodex.github.com//vinyltocat',
          authors: [
            {
              link: 'https://github.com/suziejurado',
              image: 'https://github.com/suziejurado.png'
            },
            {
              link: 'https://github.com/johncreek',
              image: 'https://github.com/johncreek.png'
            }
          ]
        },
        {
          number: 138,
          name: 'Tentocats',
          image: 'https://octodex.github.com//images/tentocats.jpg',
          link: 'https://octodex.github.com//tentocat',
          authors: [
            {
              link: 'https://github.com/heyhayhay',
              image: 'https://github.com/heyhayhay.png'
            },
            {
              link: 'https://github.com/johncreek',
              image: 'https://github.com/johncreek.png'
            },
            {
              link: 'https://github.com/cameronfoxly',
              image: 'https://github.com/cameronfoxly.png'
            }
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Clowder cats={this.state.data} />
        <main>Information about this cat</main>
      </div>
    )
  }
}

export default App
