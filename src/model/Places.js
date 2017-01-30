import jsf from 'json-schema-faker'
import { randomCoordinates } from '../lib/functions.js'

/**
 * Places (geo)feature collection
 *
 * Default properties:
 * - name
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
            "maximum": 90,
            "minimum": -90
          },
          {
            "type": "integer",
            "maximum": 180,
            "minimum": -180
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

export const getSamples = (amount = 1) => {
  const samples = new Array(amount);
  for (let i = 0; i < samples.length; i++){
    samples[i] = jsf(schema)
  }
  return amount > 1 ? samples.map(sample => sample.place) : samples[0].place
}

export default {
  schema,
  getSamples,
}
