import { bBox } from "../data/boundingBox";
export const getPlacesWithThisName = async (name) => {
  const request = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${name}.json?bbox=${bBox.minLon},${bBox.minLat},${bBox.maxLong},${bBox.maxLat}&access_token=pk.eyJ1IjoibXVzYWIxMiIsImEiOiJja3d6NXI1MWcwa25rMndseTR6cmpvanVnIn0.6bFN3MuXh3uQ57kYiifYjA`
  );
  const response = await request.json();
  console.log(response.features);
};
