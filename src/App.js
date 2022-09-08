import "./App.css";

import { useState } from "react";

import SearchInput from "./components/SearchInput";
import PlacesList from "./components/PlacesList";
import Place from "./components/Place";
import TripButton from "./components/TripButton";
import TripList from "./components/TripList";
import Trip from "./components/Trip";
import Error from "./components/Error";

//BiErrorAlt

function App() {
  const [originPlaces, setOriginPlaces] = useState(null);
  const [destinationPlaces, setDestinationPlaces] = useState(null);
  const [recommendedRoute, setRecommendedRoute] = useState(null);
  const [alternativeRoute, setAlternativeRoute] = useState(null);
  const [error, setError] = useState(null);
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
        if (
          trip.times.durations.total === lowestTimeTook &&
          recommendedArray.length === 0
        ) {
          recommendedArray.push(createSimpleRouteObject(trip));
        } else {
          alternativeArray.push(createSimpleRouteObject(trip));
        }
      });
      setRecommendedRoute(recommendedArray);
      setAlternativeRoute(alternativeArray);
    }
  };
  const createSimpleRouteObject = (tripObject) => {
    //an array of object
    const { number, segments } = tripObject;
    const simpleRouteObject = {
      number: number,
      segments: [],
    };
    segments.forEach((segment) => {
      simpleRouteObject.segments.push({
        type: segment.type,
        instruction: makeInstructionAccordingToSegmentType(
          segment.type,
          segment
        ),
      });
    });
    return simpleRouteObject;
  };
  const makeInstructionAccordingToSegmentType = (
    segmentType,
    segmentObject
  ) => {
    const { times, to, route, from } = segmentObject;
    let instruction = "";
    switch (segmentType) {
      case "walk":
        if (to.destination) {
          instruction = `Walk for ${times.durations.total} ${
            times.durations.total > 1 ? "minutes" : "minute"
          } to your destination`;
        } else {
          instruction = `Walk for ${times.durations.total} ${
            times.durations.total > 1 ? "minutes" : "minute"
          } to stop #${to.stop.key}-${to.stop.name}`;
        }
        break;
      case "ride":
        instruction = `Ride the ${route.name ? route.name : route.key} for ${
          times.durations.total
        } ${times.durations.total > 1 ? "minutes" : "minute"}.`;
        break;
      case "transfer":
        instruction = `Transfer from stop #${from.stop.key} - ${from.stop.name} to stop #${to.stop.key}-${to.stop.name}.`;
        break;
      default:
        instruction = `${segmentType} is instruction`;
    }
    return instruction;
  };
  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Trip Planner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet> */}
      <div className="grid-wrapper">
        <div className="origin-container">
          <SearchInput
            setPlaces={setOriginPlaces}
            placeholder={"Find a starting location"}
          />
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
          <SearchInput
            setPlaces={setDestinationPlaces}
            placeholder={"Choose your destination"}
          />
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
          setError={setError}
          setRecommendedRoute={setRecommendedRoute}
          setAlternativeRoute={setAlternativeRoute}
        />
        <div className="bus-container">
          {recommendedRoute &&
            recommendedRoute.map((route) => {
              return (
                <TripList type={"Recommended"} key={route.number}>
                  {route.segments.map((segment, index, array) => {
                    return (
                      <Trip
                        instruction={segment.instruction}
                        type={segment.type}
                        key={index}
                      />
                    );
                  })}
                </TripList>
              );
            })}
          {alternativeRoute &&
            alternativeRoute.map((route) => {
              return (
                <TripList type={"Alternative"} key={route.number}>
                  {route.segments.map((segment, index, array) => {
                    return (
                      <Trip
                        instruction={segment.instruction}
                        type={segment.type}
                        key={index}
                      />
                    );
                  })}
                </TripList>
              );
            })}
          {error && <Error message={error.errorMsg} />}
        </div>
      </div>
    </>
  );
}

export default App;
