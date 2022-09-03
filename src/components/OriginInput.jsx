import { useState, useEffect } from "react";
import { getPlacesWithThisName } from "../services/mapboxAPI";
const OriginInput = ({ setOriginPlaces }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getPlacesWithThisName(inputValue).then((places) => {
      setOriginPlaces(places);
    });
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
