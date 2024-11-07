import React from "react";

const DialPad = ({ onInput }) => {
  const buttons = [
    "1",
    "2",
    "3",
    "A",
    "4",
    "5",
    "6",
    "B",
    "7",
    "8",
    "9",
    "C",
    "*",
    "0",
    "#",
    "D",
  ];
  return (
    <div className="keypad-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="keypad-button"
          onClick={() => onInput(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default DialPad;
