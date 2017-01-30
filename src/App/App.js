import React, { Component, PropTypes } from 'react'
import Control from '../Control'
import Map from '../Map'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Control />
        <Map />
      </div>
    )
  }
}

// App.propTypes = {}

export default App
