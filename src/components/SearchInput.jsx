import { useState, useEffect } from "react";
import { getPlacesWithThisName } from "../services/mapboxAPI";
const SearchInput = ({ setPlaces }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    getPlacesWithThisName(inputValue).then((places) => {
      setPlaces(places);
    });
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        placeholder="Find a starting location"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
