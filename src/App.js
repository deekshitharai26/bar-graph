import React from "react";
import BarChart from "./chart.js";
import LineChart from "./line.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { render: "" };
  }
  handleClick(compName, e) {
    // console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    switch (this.state.render) {
      case "Bar":
        return <BarChart />;
      case "Line":
        return <LineChart />;
      
    }
  }
  render() {
    return (
      <div className="App">
        <ul style={{ display: "inline" }}>
          <li onClick={this.handleClick.bind(this, "Bar")}>BAR GRAPH</li>
          <li onClick={this.handleClick.bind(this, "Line")}>LINE GRAPH</li>
        
        </ul>
        {this._renderSubComp()}
      </div>
    );
  }
}

export default App;
