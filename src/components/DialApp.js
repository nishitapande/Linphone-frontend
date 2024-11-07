import React, { useState } from "react";
import DialPad from "./DialPad";
import ContactList from "./ContactList";

const DialApp = () => {
  const [input, setInput] = useState("");

  // Sample contact data (this could be fetched from an API or database)

  const contacts = [
    { id: 1, number: "1002", address: "1002@192.168.247.210" },
    { id: 2, number: "1003", address: "1003@192.168.247.211" },
    { id: 3, number: "1004", address: "1004@192.168.247.212" },

    // Add more contacts as needed
  ];

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="dialer-app">
      <div className="input-display">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleClear} className="clear-button">
          ✖
        </button>
      </div>

      {input && <ContactList input={input} contacts={contacts} />}
      <DialPad onInput={handleInput} />
    </div>
  );
};

export default DialApp;
