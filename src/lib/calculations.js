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

export default {
  clamp,
  randomFloat,
}
