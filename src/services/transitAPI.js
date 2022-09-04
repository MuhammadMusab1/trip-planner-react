export const getAllTripsForRoute = async (
  originLat,
  originLong,
  destinationLat,
  destinationLong
) => {
  const request = await fetch(
    `https://api.winnipegtransit.com/v3/trip-planner.json?api-key=J5UJHy5yUpory_fpvpUv&origin=geo/${originLat},${originLong},&destination=geo/${destinationLat},${destinationLong},`
  );
  const response = await request.json();
  const allAvailableTrips = response.plans;
  console.log(allAvailableTrips);
};
