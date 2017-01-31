import React, { Component, PropTypes } from 'react'
// import Immutable from 'immutable'
// import deepEqual from 'deep-equal'

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
    this.state.allMarkers = Places.getSamples(100)
    this.state.currentMarkers = this.state.allMarkers.slice(0, (this.state.control.amount.value || this.state.control.amount.default))
    this.state.featureCollection = Geo.dataToGeoFeatureCollection(this.state.currentMarkers)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('deepEqual amount', deepEqual(this.state.control.amount, nextState.control.amount))
  //   // console.log(deepEqual(this.state, nextState))
  //   return deepEqual(this.state, nextState)
  // }

  componentWillUpdate() {
    // console.log('componentWillUpdate', this.state)
  }

  handleMapState = (data) => {
    const map = Object.assign(this.state.map, data)
    this.setState({ map })
  }

  handleControlData = (data) => {
    const controlState = this.state.control
    const control = Object.assign(controlState, data)
    const amount = controlState.amount.value !== undefined ? controlState.amount.value : controlState.amount.default

    this.setState({
      control,
      currentMarkers: this.state.allMarkers.slice(0, amount),
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
    // const featureCollection = Geo.dataToGeoFeatureCollection(this.state.places)
    // console.log('featureCollection', JSON.stringify(featureCollection))
    // console.log(JSON.stringify(featureCollection.features.map(each => [each.geometry.coordinates[0], each.geometry.coordinates[1]])))
    return (
      <div>
        <Control config={this.state.control} appState={this.handleControlData} />
        <MapDisplay featureCollection={this.state.featureCollection} appState={this.handleMapState} />
        <TableDisplay data={this.state.currentMarkers} appState={this.handleTableState} />
      </div>
    )
  }
}

// App.propTypes = {}

export default App
