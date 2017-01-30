import React, { Component, PropTypes } from 'react'
import Control from '../Control'
import MapDisplay from '../MapDisplay'

import * as Geo from '../../lib/geo'
import * as Places from '../../model/Places'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      places: Places.getSamples(5)
    }
  }

  render() {
    const featureCollection = Geo.dataToGeoFeatureCollection(this.state.places)
    return (
      <div>
        <Control />
        <MapDisplay featureCollection={featureCollection} />
      </div>
    )
  }
}

// App.propTypes = {}

export default App
