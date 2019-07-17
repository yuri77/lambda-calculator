import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numbers.map(num => (
        <NumberButton whatever={num} />
      ))}
    </div>
  );
};

export default Numbers;
