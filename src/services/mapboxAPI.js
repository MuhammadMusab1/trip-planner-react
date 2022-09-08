import { bBox } from "../data/boundingBox";
const API_KEY = process.env.REACT_APP_MAP_BOX_API_KEY;
export const getPlacesWithThisName = async (name) => {
  const request = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?bbox=${bBox.minLon},${bBox.minLat},${bBox.maxLong},${bBox.maxLat}&limit=10&access_token=${API_KEY}`
  );
  const response = await request.json();
  const places = response.features;
  return places;
};
