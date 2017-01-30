# Models

A model returns `schema` and `getSamples(amount)`.

## Tests

Tests are made with [joi](https://github.com/hapijs/joi) and [json-schema-faker](https://github.com/json-schema-faker/json-schema-faker).

Running a test (so far):

```
$ ./node_modules/.bin/babel-node src/model/Places.spec.js

Sample is valid. value: { name: 'in reprehenderit',
  city: 't',
  country: 'ut sit Ut c',
  coordinates: [ -17, 139 ] }
```

where in `value: {}`, the object is a random sample of the data based on the model schema.

