import React, { Component } from 'react'

class CatInfo extends Component {
  render() {
    console.log('CatInfo')
    console.log(this.props.catNumberFromTheURL)

    const catNumber = parseInt(this.props.catNumberFromTheURL)

    const cat = this.props.cats.find(cat => {
      return cat.number === catNumber
    })

    if (!cat) {
      return (
        <main>
          <p>NO CAT SELECTED</p>
        </main>
      )
    }
    const link = cat.link
    const name = cat.name
    const image = cat.image

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
