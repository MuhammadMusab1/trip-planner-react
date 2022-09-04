const TripButton = () => {
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
    const selectedPoints = document
      .querySelectorAll(".selected")
      .forEach((place) => {
        if (place.classList.contains("origin-place")) {
          tripPoints.originCoords.long = +place.dataset.long;
          tripPoints.originCoords.lat = +place.dataset.lat;
        } else {
          tripPoints.destinationCoords.long = +place.dataset.long;
          tripPoints.destinationCoords.lat = +place.dataset.lat;
        }
      });
    //arrays[0] is origin and array[1] is destination
    console.log(tripPoints);
  };
  return (
    <div className="button-container" onClick={handlePlanTrip}>
      <button className="plan-trip">Plan My Trip</button>
    </div>
  );
};
export default TripButton;
