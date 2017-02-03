import { getSamples } from '../lib/samples.js'
import data from './Ships.samples.js'

/**
 * Ships (geo)feature collection
 *
 * Default properties:
 * - uid
 * - name
 * - combatPower
 * - oneTimeAbility
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
    "combatPower": {
      "type": "integer"
    },
    "oneTimeAbility": {
      "type": "string"
    }
  },
  "required": [
    "uid",
    "name",
    "combatPower",
    "oneTimeAbility",
  ]
}

export default {
  schema,
  getSamples: (amount, fixture) => getSamples(amount, fixture, schema, data),
}
