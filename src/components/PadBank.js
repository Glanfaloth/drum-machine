import React from "react";
import DrumPad from "./DrumPad";

export default function PadBank({ currentPadBank, power, updateDisplay }) {
  let padBank;
  if (power) {
    padBank = currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          clip={padBankArr[i].url}
          clipId={padBankArr[i].id}
          keyCode={padBankArr[i].keyCode}
          keyTrigger={padBankArr[i].keyTrigger}
          power={power}
          updateDisplay={updateDisplay}
        />
      );
    });
  } else {
    padBank = currentPadBank.map((drumObj, i, padBankArr) => {
      return (
        <DrumPad
          clip="#"
          clipId={padBankArr[i].id}
          keyCode={padBankArr[i].keyCode}
          keyTrigger={padBankArr[i].keyTrigger}
          power={power}
          updateDisplay={updateDisplay}
        />
      );
    });
  }
  return <div className="pad-bank">{padBank}</div>;
}
