import "./App.css";

import { useState } from "react";

import SearchInput from "./components/SearchInput";
import PlacesList from "./components/PlacesList";
import Place from "./components/Place";

function App() {
  const [originPlaces, setOriginPlaces] = useState(null);
  const [destinationPlaces, setDestinationPlaces] = useState(null);
  return (
    <div className="grid-wrapper">
      <div className="origin-container">
        <SearchInput setPlaces={setOriginPlaces} />
        <PlacesList>
          {originPlaces &&
            originPlaces.map((place) => {
              return (
                <Place
                  key={place.id}
                  long={place.geometry.coordinates[0]}
                  lat={place.geometry.coordinates[0]}
                  name={place.text}
                  locality={place.context[2].text}
                />
              );
            })}
        </PlacesList>
      </div>
      <div className="destination-container">
        <SearchInput setPlaces={setDestinationPlaces} />
        <PlacesList>
          {destinationPlaces &&
            destinationPlaces.map((place) => {
              return (
                <Place
                  key={place.id}
                  long={place.geometry.coordinates[0]}
                  lat={place.geometry.coordinates[1]}
                  name={place.text}
                  locality={place.context[2].text}
                />
              );
            })}
        </PlacesList>
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
