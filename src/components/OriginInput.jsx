import { useState } from "react";
const OriginInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <form className="origin-form">
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
