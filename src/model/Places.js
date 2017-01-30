import jsf from 'json-schema-faker'
import { randomCoordinates } from '../lib/functions.js'

/**
 * Places (geo)feature collection
 *
 * Default properties:
 * - name
 * - city
 * - country
 * - coordinates
 */

export const schema = {
  "place": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "coordinates": {
        "type": "array",
        "items": [
          {
            "type": "integer",
            "maximum": 180,
            "minimum": -180
          },
          {
            "type": "integer",
            "maximum": 90,
            "minimum": -90
          },
          {
            "type": "integer",
            "maximum": 1,
            "minimum": 1
          }
        ]
      }
    },
    "required": [
      "name",
      "city",
      "country",
      "coordinates"
    ]
  }
}

/**
 * Get random samples
 * @param  {Number} amount amount of samples to return
 * @return {array}        retrun list of samples
 */
export const getSamples = (amount = 1, fixture = false) => {
  const samples = new Array(amount);

  for (let i = 0; i < samples.length; i++){
    if (fixture) {
      samples[i] = jsf(schema)
    } else {
      // to do: Grab data from static json
      samples[i] = jsf(schema)
    }
  }

  return amount > 1 ? samples.map(sample => sample.place) : samples[0].place
}

export default {
  schema,
  getSamples,
}
