import React, { Component } from "react";

class SoundButton extends Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  playSound = () => {
    const audio = this.audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  };

  render() {
    return (
      <div
        className="sound-button"
        onClick={this.playSound}
        style={{ backgroundImage: `url(${this.props.thumb})` }}
      >
        <audio preload="true" ref={this.audioRef}>
          <source src={`/sounds/${this.props.sound}.mp3`} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default SoundButton;
