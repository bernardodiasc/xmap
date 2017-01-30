export const dataToGeoFeature = (data) => ({
  type: 'Feature',
  geometry: {
    type: 'Point',
    coordinates: data.coordinates,
  },
  properties: data,
})

export const dataToGeoFeatureCollection = (data) => ({
  type: 'FeatureCollection',
  features: data.map(each => dataToGeoFeature(each)),
})

export default {
  dataToGeoFeature,
  dataToGeoFeatureCollection,
}
