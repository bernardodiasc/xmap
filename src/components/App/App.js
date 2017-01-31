import React, { Component, PropTypes } from 'react'

import Control from '../Control'
import MapDisplay from '../MapDisplay'
import ItemDisplay from '../ItemDisplay'
import TableDisplay from '../TableDisplay'

import * as Geo from '../../lib/geo'
import * as Places from '../../model/Places'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
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
    this.state.allMarkers = Places.getSamples(100)
    this.state.currentMarkers = this.state.allMarkers.slice(0, (this.state.control.amount.value || this.state.control.amount.default))
    this.state.featureCollection = Geo.dataToGeoFeatureCollection(this.state.currentMarkers)
    this.state.table = {}
    this.state.hoveredMarker = {}
  }

  handleMapState = (data) => {
    const hoveredMarker = this.state.allMarkers.find(x => x.uid === data.uid)
    this.setState({ hoveredMarker })
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
    // console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    // console.log('this.state on render()', this.state)
    // console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    return (
      <div>
        <Control config={this.state.control} appState={this.handleControlData} />
        <MapDisplay featureCollection={this.state.featureCollection} appState={this.handleMapState} />
        {this.state.hoveredMarker && <ItemDisplay item={this.state.hoveredMarker} />}
        <TableDisplay data={this.state.currentMarkers} appState={this.handleTableState} />
      </div>
    )
  }
}

export default App
