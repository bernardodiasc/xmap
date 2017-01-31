import React, { Component, PropTypes } from 'react'

import Control from '../Control'
import MapDisplay from '../MapDisplay'
import TableDisplay from '../TableDisplay'

import * as Geo from '../../lib/geo'
import * as Places from '../../model/Places'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.state.map = {}
    this.state.control = {
      amount: {
        default: 5,
        choices: [0, 1, 5, 10, 20, 50, 100],
      },
      // list: {
      //   default: 10,
      //   choices: [0, 1, 5, 10, 20, 50, 100],
      // }
    }
    this.state.table = {}
    this.state.allMarkers = Places.getSamples(100)
    this.state.currentMarkers = this.state.allMarkers.slice(0, (this.state.control.amount.value || this.state.control.amount.default))
    this.state.featureCollection = Geo.dataToGeoFeatureCollection(this.state.currentMarkers)
  }

  handleMapState = (data) => {
    const map = Object.assign(this.state.map, data)
    this.setState({ map })
  }

  handleControlData = (data) => {
    const controlState = this.state.control
    const control = Object.assign(controlState, data)
    const amount = controlState.amount.value !== undefined ? controlState.amount.value : controlState.amount.default
    const currentMarkers = this.state.allMarkers.slice(0, amount)
    const featureCollection = Geo.dataToGeoFeatureCollection(currentMarkers)

    this.setState({
      control,
      currentMarkers,
      featureCollection,
    })
  }

  handleTableState = (data) => {
    const table = Object.assign(this.state.table, data)
    this.setState({ table })
  }

  render() {
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    console.log('this.state on render()', this.state)
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    return (
      <div>
        <Control config={this.state.control} appState={this.handleControlData} />
        <MapDisplay featureCollection={this.state.featureCollection} appState={this.handleMapState} />
        <TableDisplay data={this.state.currentMarkers} appState={this.handleTableState} />
      </div>
    )
  }
}

export default App
