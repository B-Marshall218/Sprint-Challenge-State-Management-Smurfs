import React from "react";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
      <SmurfForm />
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );

}

export default App;
