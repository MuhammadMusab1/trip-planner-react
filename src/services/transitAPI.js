const API_KEY = process.env.REACT_APP_WINNIPEG_TRANSIT_API_KEY;
export const getAllTripsForRoute = async (
  originLat,
  originLong,
  destinationLat,
  destinationLong
) => {
  if (originLat === null && destinationLat === null) {
    throw "Finish trip specification";
    return;
  }
  if (originLat === null) {
    throw "Choose an origin place";
    return;
  }
  if (destinationLat === null) {
    throw "Choose a destination place";
    return;
  }

  const request = await fetch(
    `https://api.winnipegtransit.com/v3/trip-planner.json?api-key=${API_KEY}&origin=geo/${originLat},${originLong},&destination=geo/${destinationLat},${destinationLong},`
  );
  const response = await request.json();
  const allAvailableTrips = response.plans;
  return allAvailableTrips;
};
