import { getSamples } from '../lib/samples.js'
import data from './Places.samples.js'

/**
 * Places (geo)feature collection
 *
 * Default properties:
 * - uid
 * - name
 * - city
 * - country
 * - coordinates
 */

export const schema = {
  "type": "object",
  "properties": {
    "uid": {
      "type": "string",
      "chance": "guid"
    },
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
    "uid",
    "name",
    "city",
    "country",
    "coordinates"
  ]
}

export default {
  schema,
  getSamples: (amount, fixture) => getSamples(amount, fixture, schema, data),
}
