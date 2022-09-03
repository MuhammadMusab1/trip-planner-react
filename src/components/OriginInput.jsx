import { useState, useEffect } from "react";
import { getPlacesWithThisName } from "../services/mapboxAPI";
const OriginInput = () => {
  const [inputValue, setInputValue] = useState("");
  // useEffect(() => {
  //   getPlacesWithThisName(inputValue);
  // }, [inputValue]);
  const handleSubmit = (e) => {
    e.preventDefault();
    getPlacesWithThisName(inputValue);
  };
  return (
    <form className="origin-form" onSubmit={handleSubmit}>
      <input
        placeholder="Find a starting location"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default OriginInput;
