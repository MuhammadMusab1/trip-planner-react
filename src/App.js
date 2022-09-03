import "./App.css";

import { useState } from "react";

import OriginInput from "./components/OriginInput";
import OriginList from "./components/OriginList";
import OriginPlace from "./components/OriginPlace";

function App() {
  const [originPlaces, setOriginPlaces] = useState(null);
  return (
    <div className="grid-wrapper">
      <div className="origin-container">
        <OriginInput setOriginPlaces={setOriginPlaces} />
        <OriginList>
          {originPlaces &&
            originPlaces.map((place) => {
              return (
                <OriginPlace
                  key={place.id}
                  long={place.geometry.coordinates[0]}
                  lat={place.geometry.coordinates[0]}
                  name={place.text}
                  locality={place.context[2].text}
                />
              );
            })}
        </OriginList>
      </div>
      <div className="destination-container">
        <form className="destination-form">
          <input placeholder="Choose your Destination" type="text" />
        </form>

        <ul className="destinations">
          <li
            data-long="-97.1500642"
            data-lat="49.7959303"
            className="selected"
          >
            <div className="name">Allegheny Drive</div>
            <div>Winnipeg</div>
          </li>
          <li data-long="-97.1500642" data-lat="49.7959303" className="">
            <div className="name">Allegheny Drive</div>
            <div>Winnipeg</div>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button className="plan-trip">Plan My Trip</button>
      </div>
      <div className="bus-container">
        <div className="recommended">
          <ul className="my-trip"></ul>
        </div>

        <div className="alternative">
          <ul className="alt-trip"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
