import React, { Component } from 'react'

class Photo extends Component {
  render() {
    let photoURL =
      'https://i.gifer.com/origin/8d/8d040233c9e27d0e5a7a8303a1ef853e_w200.gif'

    if (this.props.photo === '1') {
      photoURL =
        'https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3806bdae2a65a3830ea6ea1f084610c3&auto=format&fit=crop&w=934&q=80'
    }

    if (this.props.photo === '2') {
      photoURL =
        'https://images.unsplash.com/photo-1538561267802-0c2121057dc8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7bfb6bf06f1f75bcbb05fc27a23b9216&auto=format&fit=crop&w=800&q=60'
    }

    return (
      <div>
        <img src={photoURL} />
      </div>
    )
  }
}

export default Photo
