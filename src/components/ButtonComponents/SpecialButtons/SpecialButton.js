import React from "react";

const SpecialButton = ({ spe }) => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{spe}</button>
    </div>
  );
};

export default SpecialButton;
