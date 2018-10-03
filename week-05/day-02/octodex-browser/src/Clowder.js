import React, { Component } from 'react'
import Cat from './Cat'

class Clowder extends Component {
  render() {
    return (
      <aside>
        <ul>
          {this.props.cats.map(cat => {
            return <Cat key={cat.number} number={cat.number} name={cat.name} />
          })}
        </ul>
      </aside>
    )
  }
}

export default Clowder
