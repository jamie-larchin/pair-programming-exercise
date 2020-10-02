/* eslint-disable no-use-before-define */
import React from "react"
import Typeahead from "./Typeahead"
import Text from "./Text"
import { TextAttrs } from "./types"

const App = () => (
  <main className="container">
    <div className="text-center my-3">
      <h1 className="py-3">Pair programming exercise</h1>
      <img
        src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"
        alt="Cat coding gif"
        width={250}
        className="mb-3"
      />
    </div>
    <Typeahead />
    <Text
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elit
      lorem, ornare sed ullamcorper id, suscipit ut elit. Etiam a sem urna.
      Fusce et euismod dolor, vitae maximus orci. Sed libero justo, eleifend
      eget volutpat nec, posuere ut elit. Vivamus in ornare felis. Mauris
      commodo risus risus, ac ornare mi tincidunt eget. Nullam a laoreet ligula.
      Fusce eget dui ante."
      textAttrs={textAttrs}
    />
  </main>
)

const textAttrs: TextAttrs = [
  { position: [28, 55], className: "font-weight-bold" },
  { position: [126, 143], className: "font-weight-bold" },
  { position: [358, 378], className: "font-weight-bold" }
]

export default App
