import React from "react";

const NumberButton = ({ whatever }) => {
  return <button key={whatever}> {whatever}</button>;
};

export default NumberButton;
