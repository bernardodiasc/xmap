import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

import Control from '../Control'
import MapDisplay from '../MapDisplay'
import ItemDisplay from '../ItemDisplay'
import TableDisplay from '../TableDisplay'
import PagesDisplay from '../PagesDisplay'

import * as Geo from '../../lib/geo'
import Places from '../../model/Places'
import Ships from '../../model/Ships'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Row = styled.section`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    this.state.control = {
      amount: {
        default: 5,
        choices: [0, 1, 5, 10, 20, 50, 100].map(option => ({ value: option, label: option })),
      },
    }

    this.state.data = {}
    this.state.data.places = Places.getSamples(50)
    this.state.data.ships = Ships.getSamples(6)

    this.state.allMarkers = this.state.data.ships
    this.state.currentMarkers = this.state.allMarkers.slice(0, (this.state.control.amount.value || this.state.control.amount.default))
    this.state.featureCollection = Geo.dataToGeoFeatureCollection(this.state.currentMarkers)

    this.state.control.choose = {
      choices: this.state.allMarkers.map(options => ({ value: options.uid, label: options.name || options.uid })),
    }

    this.state.pages = [
      {
        title: 'Places',
        data: this.state.data.places
      },
      {
        title: 'Ships',
        data: this.state.data.ships
      },
    ]
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

    const amount = controlState.amount.value || controlState.amount.default || 1
    const choose = controlState.choose.value || controlState.choose.default || []

    const choosenItems = choose.map(each => each.value)
    const choosenMarkers = choose.length > 0
      ? this.state.allMarkers.filter(marker => choosenItems.includes(marker.uid))
      : this.state.allMarkers

    const currentMarkers = choosenMarkers.slice(0, amount)
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
    // console.info(this.state)
    // console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    return (
      <Wrapper>
        <Row>
          <MapDisplay featureCollection={this.state.featureCollection} appState={this.handleMapState} />
          {this.state.hoveredMarker && <ItemDisplay item={this.state.hoveredMarker} />}
        </Row>
        <Row>
          <Control config={this.state.control} appState={this.handleControlData} />
        </Row>
        <Row>
          <PagesDisplay>
            <TableDisplay data={this.state.currentMarkers} appState={this.handleTableState} />
          </PagesDisplay>
        </Row>
      </Wrapper>
    )
  }
}

export default App
