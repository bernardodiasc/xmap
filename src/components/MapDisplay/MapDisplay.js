import React, { Component, PropTypes } from 'react'

class MapDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = (rootNode) => {
    const props = this.props
    const mapOptions = {
      center: this.mapCenterLatLng(),
      zoom: this.props.initialZoom
    }
    map = new google.maps.Map(this.refs.googlemap, mapOptions)
    this.setState({ map: map })
  }

  mapCenterLatLng = () => {
    const props = this.props
    return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng)
  }

  render() {
    console.log(this.state)
    return (
      <div className="googlemap" ref="googlemap"></div>
    )
  }
}

MapDisplay.propTypes = {
  featureCollection: PropTypes.object,
}

MapDisplay.defaultProps = {
  initialZoom: 8,
  mapCenterLat: 43.6425569,
  mapCenterLng: -79.4073126,
}

export default MapDisplay
