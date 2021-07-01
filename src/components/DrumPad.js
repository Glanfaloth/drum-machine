// import React, { useState, useEffect } from "react";

// const activeStyle = {
//   backgroundColor: "orange",
//   boxShadow: "0 3px orange",
//   height: 77,
//   marginTop: 13,
// };

// const inactiveStyle = {
//   backgroundColor: "grey",
//   marginTop: 10,
//   boxShadow: "3px 3px 5px black",
// };

// export default function DrumPad({
//   clip,
//   clipId,
//   keyCode,
//   keyTrigger,
//   power,
//   updateDisplay,
// }) {
//   const [padStyle, setPadStyle] = useState(inactiveStyle);
//   useEffect(() => {
//     document.addEventListener("keydown", handleKeyPress);
//     return () => {
//       document.removeEventListener("keydown", handleKeyPress);
//     };
//   }, ["keydown", handleKeyPress]);

//   function handleKeyPress(e) {
//     if (e.keyCode === keyCode) {
//       playSound();
//     }
//   }
//   function activatePad() {
//     if (power) {
//       if (padStyle.backgroundColor === "orange") {
//         setPadStyle(inactiveStyle);
//       } else {
//         setPadStyle(activeStyle);
//       }
//     } else if (padStyle.marginTop === 13) {
//       setPadStyle(inactiveStyle);
//     } else {
//       setPadStyle({
//         height: 77,
//         marginTop: 13,
//         backgroundColor: "grey",
//         boxShadow: "0 3px grey",
//       });
//     }
//   }
//   function playSound() {
//     const sound = document.getElementById(keyTrigger);
//     sound.currentTime = 0;
//     sound.play();
//     activatePad();
//     setTimeout(() => activatePad(), 1);
//     updateDisplay(clipId.replace(/-/g, " "));
//   }
//   return (
//     <div className="drum-pad" id={clipId} onClick={playSound} style={padStyle}>
//       <audio className="clip" id={keyTrigger} src={clip} />
//       {keyTrigger}
//     </div>
//   );
// }

import React from "react";

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
    height: 77,
    marginTop: 13
  };
  
  const inactiveStyle = {
    backgroundColor: 'grey',
    marginTop: 10,
    boxShadow: '3px 3px 5px black'
  };

class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        padStyle: inactiveStyle
      };
      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.activatePad = this.activatePad.bind(this);
    }
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
    activatePad() {
      if (this.props.power) {
        if (this.state.padStyle.backgroundColor === 'orange') {
          this.setState({
            padStyle: inactiveStyle
          });
        } else {
          this.setState({
            padStyle: activeStyle
          });
        }
      } else if (this.state.padStyle.marginTop === 13) {
        this.setState({
          padStyle: inactiveStyle
        });
      } else {
        this.setState({
          padStyle: {
            height: 77,
            marginTop: 13,
            backgroundColor: 'grey',
            boxShadow: '0 3px grey'
          }
        });
      }
    }
    playSound() {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
    }
    render() {
      return (
        <div
          className='drum-pad'
          id={this.props.clipId}
          onClick={this.playSound}
          style={this.state.padStyle}
          >
          <audio
            className='clip'
            id={this.props.keyTrigger}
            src={this.props.clip}
          />
          {this.props.keyTrigger}
        </div>
      );
    }
  }

export default DrumPad;