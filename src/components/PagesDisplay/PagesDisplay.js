import React, { Children, PropTypes } from 'react'
import styled from 'styled-components'

const Pages = styled.section`
  width: 100%;
  margin: 1rem;
  border: 1px solid silver;
`

const Details = styled.details`
  width: 100%;
`

const Summary = styled.summary`
  width: 100%;
  cursor: pointer;
  text-align: left;
  padding: 1rem;

  &:hover {
    background: silver;
  }
`

const Body = styled.div`
  width: 100%;
  padding: 1rem;
  max-height: 500px;
  overflow-y: auto;
`

const PagesDisplay = ({ children }) => (
  <Pages>
    {Children.map(children, (child, i) => (
      <Details open={false} key={i}>
        <Summary>
          {child.props.pageName}
        </Summary>
        <Body>
          {child}
        </Body>
      </Details>
    ))}
  </Pages>
)

PagesDisplay.propTypes = {
  children: PropTypes.node,
}

export default PagesDisplay
