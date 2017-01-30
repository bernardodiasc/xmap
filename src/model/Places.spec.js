import Joi from 'joi'
import Places from './Places'

const schema = Joi.object().keys({
  name: Joi.string(),
  city: Joi.string(),
  country: Joi.string(),
  coordinates: Joi.array(),
})

const sample = Places.getSamples()

Joi.validate(sample, schema, (err, value) => {
  if (err) console.log('Sample is invalid. err:', err)
  else console.log('Sample is valid. value:', value)
})
