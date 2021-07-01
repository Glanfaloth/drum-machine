import "./App.css";
import React, { useState } from "react";
import PadBank from "./components/PadBank";
import Bank from "./components/Bank";
import Form from "react-bootstrap/Form";
import Switch from "react-switch";

const bankOne = Bank(1);
const bankTwo = Bank(2);

export default function App() {
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState(String.fromCharCode(160));
  const [currentPadBank, setCurrentPadBank] = useState(bankOne);
  const [currentPadBankId, setCurrentPadBankId] = useState("Heater Kit");
  const [sliderVal, setSliderVal] = useState(0.3);

  function powerControl() {
    setPower(!power);
    setDisplay(String.fromCharCode(160));
  }
  function selectBank() {
    if (power) {
      if (currentPadBankId === "Heater Kit") {
        setCurrentPadBank(bankTwo);
        setDisplay("Smooth Piano Kit");
        setCurrentPadBankId("Smooth Piano Kit");
      } else {
        setCurrentPadBank(bankOne);
        setDisplay("Heater Kit");
        setCurrentPadBankId("Heater Kit");
      }
    }
  }

  function displayClipName(name) {
    if (power) {
      setDisplay(name);
    }
  }
  function adjustVolume(e) {
    if (power) {
      setSliderVal(e.target.value);
      setDisplay("Volume: " + Math.round(e.target.value * 100));
      setTimeout(() => clearDisplay(), 1000);
    }
  }
  function clearDisplay() {
    setDisplay(String.fromCharCode(160));
  }

  const clips = [].slice.call(document.getElementsByClassName("clip"));
  clips.forEach((sound) => {
    sound.volume = sliderVal;
  });

  return (
    <div className="inner-container" id="drum-machine">
      <PadBank
        clipVolume={sliderVal}
        currentPadBank={currentPadBank}
        power={power}
        updateDisplay={displayClipName}
      />

      <div className="logo">
        <div className="inner-logo ">{"DRUM MACHINE"}</div>
        <i className="inner-logo fa fa-rocket" />
      </div>

      <div className="controls-container">
        <div className="control">
          <p>Power</p>
          <Switch
            onChange={powerControl}
            checked={power}
            onColor="#fab1a0"
            onHandleColor="#00b894"
          />
        </div>

        <p id="display">{display}</p>

        <Form>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              max="1"
              min="0"
              onChange={adjustVolume}
              step="0.01"
              type="range"
              value={sliderVal}
            />
          </Form.Group>
        </Form>

        <div className="control">
          <p>Bank</p>
          <Switch
            onChange={selectBank}
            checked={currentPadBank === bankOne}
            onColor="#fab1a0"
            offColor="#fab1a0"
            onHandleColor="#00b894"
            offHandleColor="#00b894"
            uncheckedIcon=""
            checkedIcon=""
          />
        </div>
      </div>
    </div>
  );
}
