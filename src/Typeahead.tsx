/* eslint-disable no-use-before-define */
import React from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead"
import "react-bootstrap-typeahead/css/Typeahead.css"

const Typeahead = () => {
  return (
    <>
      <label>Giphy Search</label>
      <AsyncTypeahead
        id="giphyTypeahead"
        isLoading={false}
        onSearch={console.log}
        options={[]}
        placeholder="Start typing to see suggestions..."
      />
    </>
  )
}

export default Typeahead
