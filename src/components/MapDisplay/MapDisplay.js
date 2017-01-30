import React, { Component, PropTypes } from 'react'
import GoogleMapsLoader from 'google-maps'

class MapDisplay extends React.Component {
  componentDidMount() {
    GoogleMapsLoader.KEY = 'AIzaSyB8ScO8AjPmGcr80eRgieOPnOa7IXLYtPs'
    GoogleMapsLoader.LANGUAGE = 'en'
    GoogleMapsLoader.LIBRARIES = ['places']
    GoogleMapsLoader.load(this.configureMap.bind(this))
  }

  configureMap(google) {
    this.map = new google.maps.Map(this.refs.googlemap, {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 2,
      minZoom: 1,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      mapTypeIds: [
        google.maps.MapTypeId.HYBRID,
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.SATELLITE,
        google.maps.MapTypeId.TERRAIN
      ],
      scaleControl: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      }
    })

    this.map.data.addGeoJson(this.props.featureCollection)
    window.map = window.map || this.map
  }

  render() {
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
