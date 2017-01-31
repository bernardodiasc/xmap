import React, { Component, PropTypes } from 'react'

const ItemDisplay = ({ item }) => (
  <div className="ItemDisplay">
    {JSON.stringify(item)}
  </div>
)

ItemDisplay.propTypes = {
  item: PropTypes.object,
}

export default ItemDisplay
