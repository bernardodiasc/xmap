import Joi from 'joi'
import Ships from './Ships'

/**
 * Spec schema, based on Joi for better legibility and testing features
 * @type {object}
 */
const schema = Joi.object().keys({
  uid: Joi.string().required(),
  name: Joi.string().required(),
  combatPower: Joi.number().required(),
  oneTimeAbility: Joi.string().required(),
})

describe('Ships model', () => {
  test('Model.getSamples(1, false) return random data that matches spec schema', () => {
    const data = Ships.getSamples(1, false)
    const validate = Joi.validate(data[0], schema)
    expect(validate.error).toBe(null)
  })

  test('Model.getSamples(1, true) return static data that matches spec schema', () => {
    const data = Ships.getSamples(1, true)
    const validate = Joi.validate(data[0], schema)
    expect(validate.error).toBe(null)
  })
})
