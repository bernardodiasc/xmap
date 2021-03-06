import React, { Component, PropTypes } from 'react'
import GoogleMapsLoader from 'google-maps'
import deepEqual from 'deep-equal'

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

    // Add some style.
    // map.data.setStyle(function(feature) {
    //   return /** @type {google.maps.Data.StyleOptions} */({
    //     fillColor: feature.getProperty('color'),
    //     strokeWeight: 1
    //   })
    // })

    this.map.data.addListener('mouseover', (event) => {
      this.props.appState({ uid: event.feature.getProperty('uid') })
    })

    this.addGeoJson(this.props.featureCollection)
    window.map = window.map || this.map
  }

  componentWillUpdate(nextProps, nextState) {
    if (!deepEqual(this.props.featureCollection, nextProps.featureCollection)) {
      this.addGeoJson(nextProps.featureCollection)
    }
  }

  addGeoJson(featureCollection) {
    this.map.data.forEach(feature => this.map.data.remove(feature))
    this.map.data.addGeoJson(featureCollection)
  }

  render() {
    return (
      <div className="MapDisplay" ref="googlemap"></div>
    )
  }
}

MapDisplay.propTypes = {
  featureCollection: PropTypes.object,
  appState: PropTypes.func,
}

export default MapDisplay
