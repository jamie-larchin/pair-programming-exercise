/* eslint-disable no-use-before-define */
import React, { useState } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead"
import "react-bootstrap-typeahead/css/Typeahead.css"
import "./styles.css"

type Option = {
  name: string
}

type OptionsState = {
  data: Option[]
  loading: boolean
  error: boolean
}

const App = () => {
  const [options, setOptions] = useState<OptionsState>({
    data: [],
    loading: false,
    error: false
  })

  const onSearch = (query: string): void => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      data: [{ name: "Disney" }]
    }))
  }

  return (
    <div className="App container">
      <h1>Pair programming exercise</h1>
      <AsyncTypeahead<Option>
        id="giphyTypeahead"
        isLoading={options.loading}
        onSearch={onSearch}
        options={options.data}
        placeholder="Start typing to search"
        labelKey="name"
      />
    </div>
  )
}

export default App
