import React, { Component } from 'react'

class CatInfo extends Component {
  render() {
    if (!this.props.cat) {
      return (
        <main>
          <p>NO CAT SELECTED</p>
        </main>
      )
    }
    const link = this.props.cat.link
    const name = this.props.cat.name
    const image = this.props.cat.image

    return (
      <main>
        <p>
          <a href={link}>{name}</a>
        </p>
        <img src={image} />
      </main>
    )
  }
}

export default CatInfo
