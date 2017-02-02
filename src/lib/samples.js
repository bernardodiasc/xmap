import Ajv from 'ajv'
import jsf from 'json-schema-faker'

/**
 * Get random samples
 * @param  {number}  amount  amount of samples to return
 * @param  {boolean} fixture choose between random or static data
 * @param  {object}  schema  schema of the desired model to get samples
 * @param  {array}   data    sample data to fill the samples
 * @return {array}           retrun list of samples
 */
export const getSamples = (amount = 1, fixture = false, schema = {}, data = []) => {
  const validAmount = amount ? parseInt(amount, 10) : 0
  const size = fixture && data.length > 0 && data.length < validAmount ? data.length : validAmount
  const samples = new Array(size)
  const ajv = new Ajv()

  for (let i = 0; i < samples.length; i++) {
    if (fixture && data[i]) {
      if (ajv.validate(schema, data[i])) {
        samples[i] = data[i]
      } else {
        samples[i] = { error: 'invalid: data structure provided don`t match with schema.' }
      }
    } else if (fixture && !data[i]) {
      console.log('data[i]:', data[i])
      delete samples[i]
    } else {
      samples[i] = jsf(schema)
    }
  }

  return (samples && samples.length > 0) ? samples.map(sample => sample) : []
}

export default {
  getSamples,
}
