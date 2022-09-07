import { getAllTripsForRoute } from "../services/transitAPI";
const TripButton = ({ separateRecommendedAndAlternativeRoute, setError }) => {
  const handlePlanTrip = () => {
    const tripPoints = {
      originCoords: {
        long: null,
        lat: null,
      },
      destinationCoords: {
        long: null,
        lat: null,
      },
    };
    document.querySelectorAll(".selected").forEach((place) => {
      if (place.classList.contains("origin-place")) {
        tripPoints.originCoords.long = +place.dataset.long;
        tripPoints.originCoords.lat = +place.dataset.lat;
      } else {
        tripPoints.destinationCoords.long = +place.dataset.long;
        tripPoints.destinationCoords.lat = +place.dataset.lat;
      }
    });
    //arrays[0] is origin and array[1] is destination
    const { originCoords, destinationCoords } = tripPoints; //deconstructing syntax
    getAllTripsForRoute(
      originCoords.lat,
      originCoords.long,
      destinationCoords.lat,
      destinationCoords.long
    )
      .then((allAvailableTrips) => {
        separateRecommendedAndAlternativeRoute(allAvailableTrips);
        setError(null);
      })
      .catch((error) => {
        if (typeof error === "object") {
          setError({ errorMsg: "404 NOT FOUND" });
        } else {
          setError({ errorMsg: error });
        }
      });
  };
  return (
    <div className="button-container" onClick={handlePlanTrip}>
      <button className="plan-trip">Plan My Trip</button>
    </div>
  );
};
export default TripButton;
