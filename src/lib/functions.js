// https://github.com/hughsk/clamp/
export const clamp = (value, min, max) => {
  return min < max
    ? (value < min ? min : value > max ? max : value)
    : (value < max ? max : value > min ? min : value)
}


// https://github.com/sindresorhus/random-float
export const randomFloat = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers');
  }

  return Math.random() * (max - min) + min;
};


// https://github.com/mock-end/random-latitude/
export const randomLatitude = (options) => {
  var MAX = 90;
  var MIN = -90;

  options = Object.assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options);

  options.min = clamp(options.min, MIN, MAX);
  options.max = clamp(options.max, MIN, MAX);

  options.inspected = true;

  return randomFloat(options);
};


// https://github.com/mock-end/random-longitude/
export const randomLongitude = (options) => {
  var MAX = 180;
  var MIN = -180;

  options = assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options);

  options.min = clamp(options.min, MIN, MAX);
  options.max = clamp(options.max, MIN, MAX);

  options.inspected = true;

  return randomFloat(options);
};


// https://github.com/mock-end/random-altitude/
export const randomAltitude = (options) => {
  var MAX = 8488;
  var MIN = 0;

  options = assign({
    fixed: 5,
    min: MIN,
    max: MAX
  }, options);

  options.min = clamp(options.min, MIN, MAX);
  options.max = clamp(options.max, MIN, MAX);

  options.inspected = true;

  return randomFloat(options);
};


// https://github.com/mock-end/random-coordinates/
export const randomCoordinates = (options) => {
  return randomLatitude(options) + ', ' + randomLongitude(options);
};


// https://github.com/mock-end/random-geojson/
export const randomGeoCoordinates = (options) => {
  return randomLatitude(options) + ', ' + randomLongitude(options) + ', ' + randomAltitude(options);
};

// https://github.com/mock-end/random-country/
// ...


export default {
  clamp,
  randomFloat,
  randomLatitude,
  randomLongitude,
  randomAltitude,
  randomCoordinates,
  randomGeoCoordinates
}
