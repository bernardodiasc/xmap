import * as samples from '../lib/samples.js'

// Unit Test getSamples
// it should:
// - Model.getSamples(99999, true) return the max amount existing in model static sample;

const data = [
  {
    uid: 'nononono'
  },
  {
    uid: 'lalalala'
  }
]

const schema = {
  "type": "object",
  "properties": {
    "uid": {
      "type": "string"
    }
  },
  "required": [
    "uid"
  ]
}

const getSamples = (amount, fixture) => samples.getSamples(amount, fixture, schema, data)

describe('Lib Samples', () => {
  describe('getSamples() with random samples', () => {
    test('getSamples(null) return 0 sample', () => {
      const sampleData = getSamples(null)
      expect(sampleData.length).toBe(0)
    })

    test('getSamples() return 1 sample', () => {
      const sampleData = getSamples()
      expect(sampleData.length).toBe(1)
    })

    test('getSamples(1) return 1 sample', () => {
      const sampleData = getSamples(1)
      expect(sampleData.length).toBe(1)
    })

    test('getSamples(5) return 5 samples', () => {
      const sampleData = getSamples(5)
      expect(sampleData.length).toBe(5)
    })

    test('getSamples(0) return 0 samples', () => {
      const sampleData = getSamples(0)
      expect(sampleData.length).toBe(0)
    })

    test('getSamples(undefined) return 1 sample', () => {
      const sampleData = getSamples(undefined)
      expect(sampleData.length).toBe(1)
    })
  })

  describe('getSamples() with static samples', () => {
    test('getSamples(null, true) return 0 sample', () => {
      const sampleData = getSamples(null, true)
      expect(sampleData.length).toBe(0)
    })

    test('getSamples(1, true) return 1 samples', () => {
      const sampleData = getSamples(1, true)
      expect(sampleData.length).toBe(1)
    })

    test('getSamples(5, true) return 5 samples or the max amount of samples available of static samples', () => {
      const sampleData = getSamples(5, true)
      expect(sampleData.length).toBe(data.length)
    })

    test('getSamples(0) return 0 samples', () => {
      const sampleData = getSamples(0, true)
      expect(sampleData.length).toBe(0)
    })

    test('getSamples(undefined) return 1 sample', () => {
      const sampleData = getSamples(undefined, true)
      expect(sampleData.length).toBe(1)
    })

    test('getSamples(99999) return the max amount of samples available of static samples', () => {
      const sampleData = getSamples(9, true)
      expect(sampleData.length).toBe(data.length)
    })
  })
})
