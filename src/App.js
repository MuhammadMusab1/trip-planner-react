import "./App.css";

import { useState } from "react";

import SearchInput from "./components/SearchInput";
import PlacesList from "./components/PlacesList";
import Place from "./components/Place";
import TripButton from "./components/TripButton";
import TripList from "./components/TripList";

function App() {
  const [originPlaces, setOriginPlaces] = useState(null);
  const [destinationPlaces, setDestinationPlaces] = useState(null);
  const [recommendedRoute, setRecommendedRoute] = useState(null);
  const [alternativeRoute, setAlternativeRoute] = useState(null);
  const findTheFastestTrip = (tripsArray) => {
    if (tripsArray) {
      let lowestTimeTook = tripsArray[0].times.durations.total;
      tripsArray.forEach((trip) => {
        if (trip.times.durations.total < lowestTimeTook) {
          lowestTimeTook = trip.times.durations.total;
        }
      });
      console.log(lowestTimeTook + " lowest time took");
      return lowestTimeTook;
    }
  };
  const separateRecommendedAndAlternativeRoute = (allAvailableTrips) => {
    const recommendedArray = [];
    const alternativeArray = [];

    if (allAvailableTrips) {
      const lowestTimeTook = findTheFastestTrip(allAvailableTrips);
      allAvailableTrips.forEach((trip) => {
        if (trip.times.durations.total === lowestTimeTook) {
          recommendedArray.push(trip);
        } else {
          alternativeArray.push(trip);
        }
      });
      setRecommendedRoute(recommendedArray);
      setAlternativeRoute(alternativeArray);
    }
  };
  console.log(recommendedRoute);
  console.log(alternativeRoute);
  return (
    <div className="grid-wrapper">
      <div className="origin-container">
        <SearchInput setPlaces={setOriginPlaces} />
        <PlacesList type={"origin-list"}>
          {originPlaces &&
            originPlaces.map((place) => {
              return (
                <Place
                  key={place.id}
                  long={place.geometry.coordinates[0]}
                  lat={place.geometry.coordinates[1]}
                  name={place.text}
                  locality={place.context[2].text}
                  type={"origin-place"}
                />
              );
            })}
        </PlacesList>
      </div>
      <div className="destination-container">
        <SearchInput setPlaces={setDestinationPlaces} />
        <PlacesList type={"destination-list"}>
          {destinationPlaces &&
            destinationPlaces.map((place) => {
              return (
                <Place
                  key={place.id}
                  long={place.geometry.coordinates[0]}
                  lat={place.geometry.coordinates[1]}
                  name={place.text}
                  locality={place.context[2].text}
                  type={"destination-place"}
                />
              );
            })}
        </PlacesList>
      </div>
      <TripButton
        separateRecommendedAndAlternativeRoute={
          separateRecommendedAndAlternativeRoute
        }
      />
      <div className="bus-container">
        <TripList type={"Recommended"} />
        <TripList type={"Alternative"} />
      </div>
    </div>
  );
}

export default App;
