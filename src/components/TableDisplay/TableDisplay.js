import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
`

const Th = styled.th`
  background: silver;
`

const Td = styled.td`
  text-align: left;
`

const TableDisplay = ({ data }) => (
  <Table>
    <thead>
      <tr>
        {data[0] && Object.entries(data[0]).map((cell, i) => (
          <Th key={i}>{cell[0]}</Th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {Object.entries(row).map((cell, i) => (
            <Td key={i}>{JSON.stringify(cell[1])}</Td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
)

TableDisplay.propTypes = {
  data: PropTypes.array,
}

export default TableDisplay
