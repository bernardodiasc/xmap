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

// https://github.com/mock-end/random-latitude/
export const randomLatitude = (options) => {
  var MAX = 90
  var MIN = -90

  options = Object.assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options)

  options.min = clamp(options.min, MIN, MAX)
  options.max = clamp(options.max, MIN, MAX)

  options.inspected = true

  return randomFloat(options)
}

// https://github.com/mock-end/random-longitude/
export const randomLongitude = (options) => {
  var MAX = 180
  var MIN = -180

  options = assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options)

  options.min = clamp(options.min, MIN, MAX)
  options.max = clamp(options.max, MIN, MAX)

  options.inspected = true

  return randomFloat(options)
}

// https://github.com/mock-end/random-altitude/
export const randomAltitude = (options) => {
  var MAX = 8488
  var MIN = 0

  options = assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options)

  options.min = clamp(options.min, MIN, MAX)
  options.max = clamp(options.max, MIN, MAX)

  options.inspected = true

  return randomFloat(options)
}

// https://github.com/mock-end/random-coordinates/
export const randomCoordinates = (options) => {
  return randomLatitude(options) + ', ' + randomLongitude(options)
}

// https://github.com/mock-end/random-geojson/
export const randomGeoCoordinates = (options) => {
  return randomLatitude(options) + ', ' + randomLongitude(options) + ', ' + randomAltitude(options)
}

// https://github.com/mock-end/random-country/
// ...

export default {
  dataToGeoFeature,
  dataToGeoFeatureCollection,
  randomLatitude,
  randomLongitude,
  randomAltitude,
  randomCoordinates,
  randomGeoCoordinates,
}
