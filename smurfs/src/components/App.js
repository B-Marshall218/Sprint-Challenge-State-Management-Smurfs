import React from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SmurfList />
      <SmurfForm />

    </div>
  );

}

export default App;
