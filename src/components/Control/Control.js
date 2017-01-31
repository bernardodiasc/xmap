import React, { Component, PropTypes } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const Wrapper = styled.section`
  width: 800px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: left;
`;

const Option = ({ template, config, handleChange }) => {
  const defaultValue = config.value !== undefined ? config.value : config.default
  switch (template) {
    case 'amount':
      return (
        <Select
          name={template}
          value={defaultValue}
          options={config.choices.map(option => ({ value: option, label: option }))}
          onChange={value => handleChange(value.value)}
        />
      )
    case 'list':
      return (
        <Select
          name={template}
          value={defaultValue}
          options={config.choices.map(option => ({ value: option, label: option }))}
          onChange={value => handleChange(value.value)}
        />
      )
  }
  return null
}

const Control = ({ config, appState }) => (
  <Wrapper>
    {Object.entries(config).map(([key, value], i) => (
      <Option
        key={i}
        template={key}
        config={value}
        handleChange={x => appState({ [key]: { ...value, value: x } })}
      />
    ))}
  </Wrapper>
)

Control.propTypes = {
  config: PropTypes.object,
  appState: PropTypes.func,
}

export default Control
