import React from "react";
import { MultipleChoice } from "./components/multiplechoiceSA";
import data from "./data/data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultipleChoice title={data.title} properties={data.properties} />
      </header>
    </div>
  );
}

export default App;
