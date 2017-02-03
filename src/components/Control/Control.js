import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const Wrapper = styled.section`
  margin: 1rem;
  text-align: left;
  display: flex;
  flex-wrap: nowrap;
`

const OptionWrapper = styled.section`
  flex-grow: 1;
  margin: 0 1rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`

const Option = ({ template, config, handleChange }) => {
  const defaultValue = config.value !== undefined ? config.value : config.default
  switch (template) {
    case 'amount':
      return (
        <OptionWrapper>
          <span>Amount:</span>
          <Select
            name={template}
            value={defaultValue}
            options={config.choices}
            onChange={value => handleChange(value.value)}
            style={{ width: '100px' }}
          />
        </OptionWrapper>
      )
    case 'choose':
      return (
        <OptionWrapper>
          <span>Select:</span>
          <Select
            name={template}
            value={defaultValue}
            options={config.choices}
            onChange={value => handleChange(value)}
            style={{ width: '380px' }}
            multi
          />
        </OptionWrapper>
      )
  }
  return null
}

const Control = ({ config, appState }) => (
  <Wrapper>
    {Object.entries(config).map(([key, config], i) => (
      <Option
        key={i}
        template={key}
        config={config}
        handleChange={data => {
          const output = { [key]: { default: config.default, choices: config.choices, value: data } }
          return appState(output)
        }}
      />
    ))}
  </Wrapper>
)

Control.propTypes = {
  config: PropTypes.shape({
    default: PropTypes.any,
    value: PropTypes.any,
    choices: PropTypes.array,
  }),
  appState: PropTypes.func,
}

Control.defaultProps = {
  config: {
    default: '',
    value: '',
    choices: [],
  },
}

export default Control
