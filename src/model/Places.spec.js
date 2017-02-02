import Joi from 'joi'
import Places from './Places'

/**
 * Spec schema, based on Joi for better legibility and testing features
 * @type {object}
 */
const schema = Joi.object().keys({
  uid: Joi.string().required(),
  name: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
  coordinates: Joi.array(),
})

describe('Places model', () => {
  test('Model.getSamples(1, false) return random data that matches spec schema', () => {
    const data = Places.getSamples(1, false)
    const validate = Joi.validate(data[0], schema)
    expect(validate.error).toBe(null);
  })

  test('Model.getSamples(1, true) return static data that matches spec schema', () => {
    const data = Places.getSamples(1, true)
    const validate = Joi.validate(data[0], schema)
    expect(validate.error).toBe(null);
  })
})
