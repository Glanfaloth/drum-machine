import React from "react";
import DrumPad from "./DrumPad";

export default function PadBank({ currentPadBank, power, updateDisplay }) {
  let padBank;
  padBank = currentPadBank.map((drumObj, i, padBankArr) => {
    return (
      <DrumPad
        clip={power ? padBankArr[i].url : "#"}
        clipId={padBankArr[i].id}
        keyCode={padBankArr[i].keyCode}
        keyTrigger={padBankArr[i].keyTrigger}
        power={power}
        updateDisplay={updateDisplay}
      />
    );
  });
  return <div className="pad-bank">{padBank}</div>;
}
