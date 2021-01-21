/* eslint-disable no-use-before-define */
import React from "react";
import Typeahead from "./Typeahead";
import { giphyApiKey } from "./config";

const App = () => (
  <main className="container pb-5">
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
  </main>
);

export default App;
