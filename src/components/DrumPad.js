import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";


export default function DrumPad({
  clip,
  clipId,
  keyCode,
  keyTrigger,
  power,
  updateDisplay,
}) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, ["keydown", handleKeyPress]);

  function handleKeyPress(e) {
    if (e.keyCode === keyCode) {
      playSound();
    }
  }
  function playSound() {
    const sound = document.getElementById(keyTrigger);
    sound.play();
    updateDisplay(clipId.replace(/-/g, " "));
  }
  return (
    <Button variant="primary" id={clipId} onClick={playSound} disabled={!power} className='drum-pad'>
      <audio className="clip" id={keyTrigger} src={clip} />
      {keyTrigger}
    </Button>
  );
}