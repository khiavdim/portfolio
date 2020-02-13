import React from "react";
import "./App.css";
import routes from "./routes";
import Navigation from "./Components/Navigation/Navigation";

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Navigation/>
      <div>{routes}</div>
    </div>
  );
  }
}

export default App;
