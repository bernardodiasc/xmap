import React, { Component, PropTypes } from 'react'

class Map extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = (rootNode) => {
    var mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    },
    map = new google.maps.Map(this.refs.googlemap, mapOptions)
    var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map})
    this.setState({map: map})
  }

  mapCenterLatLng = () => {
    var props = this.props
    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng)
  }

  render() {
    return (
      <div className="googlemap" ref="googlemap"></div>
    )
  }
}

// Map.propTypes = {}

Map.defaultProps = {
  initialZoom: 8,
  mapCenterLat: 43.6425569,
  mapCenterLng: -79.4073126,
}

export default Map
